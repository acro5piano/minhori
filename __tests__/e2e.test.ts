import * as request from 'supertest'
import { app } from '@api/app'
import { Model } from 'objection'

const token = 'FAKE_FIREBASE_UID'

async function migrate() {
  await (global as any).knex.migrate.rollback()
  await (global as any).knex.migrate.latest()
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
  it('create question', async () => {
    let res = await request(app)
      .post('/api/v1/questions')
      .set('Authorization', token)
      .send({
        title: 'title',
        content: 'content',
      })
      .expect(200)
    expect(res.body.title).toEqual('title')

    res = await request(app)
      .get('/api/v1/questions')
      .expect(200)

    expect(res.body.length).toBeGreaterThanOrEqual(1)
  })
})
