import * as request from 'supertest'
import { app } from '@api/app'
import { Model } from 'objection'

const token = 'FAKE_FIREBASE_UID'

describe('auth', () => {
  beforeAll((global as any).migrate)
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
