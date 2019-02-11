import * as request from 'supertest'
import { app } from '@api/app'
import { Model } from 'objection'

const token = 'FAKE_FIREBASE_UID'

async function migrate() {
  await (global as any).knex.migrate.rollback()
  await (global as any).knex.migrate.latest()
  await (global as any).knex.seed.run()
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
        tags: [{ id: '00000000-0000-0000-0000-000000000001' }],
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
      id: '00000000-0000-0000-0000-000000000001',
      name: 'オーストラリア',
    })
  })
})
