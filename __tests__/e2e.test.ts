import * as request from 'supertest'
import { app } from '@api/app'
import { Model } from 'objection'
import { Question } from '@api/models/Question'
import { User } from '@api/models/User'

const token = 'FAKE_FIREBASE_UID'

async function migrate() {
  const knex = (global as any).knex
  await knex.migrate.rollback()
  await knex.migrate.latest()
  await knex.seed.run()
  await knex('questions_tags').del()
  await knex('answers').del()
  await knex('questions').del()
  await knex('users').del()
}

describe('auth', () => {
  beforeAll(migrate)
  afterAll(Model.knex().destroy)

  it('registers user', async () => {
    await request(app)
      .post('/api/v1/auth/register')
      .set('Authorization', token)
      .send({ name: 'Kazuya' })
      .expect(200)

    const res = await request(app)
      .get('/api/v1/auth/me')
      .set('Authorization', token)
      .expect(200)

    expect(res.body.name).toEqual('Kazuya')
  })

  it('does not duplicate user', async () => {
    await request(app)
      .post('/api/v1/auth/register')
      .set('Authorization', token)
      .send({ name: 'Kazuya' })
      .expect(200)

    expect(await User.query()).toHaveLength(1)
  })
})

describe('question', () => {
  it('reject to create question', async () => {
    await request(app)
      .post('/api/v1/questions')
      .send({
        title: 'title',
        content: 'content',
      })
      .expect(401)
    await request(app)
      .post('/api/v1/questions')
      .set('Authorization', token)
      .send({
        title: 'title',
        content: 'content',
      })
      .expect(422)
  })

  it('create question', async () => {
    let res = await request(app)
      .post('/api/v1/questions')
      .set('Authorization', token)
      .send({
        title: 'title',
        content: 'content',
        tags: [{ id: 1 }],
      })
      .expect(200)
    expect(res.body.title).toEqual('title')

    res = await request(app)
      .get('/api/v1/questions')
      .expect(200)

    expect(res.body.length).toBeGreaterThanOrEqual(1)
    expect(res.body[0].title).toEqual('title')
    expect(res.body[0].tags).toHaveLength(1)
    expect(res.body[0].tags[0]).toMatchObject({
      id: 1,
      name: 'オーストラリア',
    })
  })

  it('create answer', async () => {
    const question = await Question.query().first()
    if (!question) {
      throw Error
    }
    let res = await request(app)
      .post(`/api/v1/questions/${question.id}/answers`)
      .set('Authorization', token)
      .send({
        title: 'title',
        content: 'content',
      })
      .expect(200)
    expect(res.body.title).toEqual('title')

    res = await request(app)
      .get(`/api/v1/questions/${question.id}`)
      .expect(200)
    expect(res.body.answers).toHaveLength(1)
  })
})
