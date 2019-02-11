import * as request from 'supertest'
import { app } from '@api/app'
import { Model } from 'objection'

describe('health', () => {
  afterAll(Model.knex().destroy)

  it('returns 200', async () => {
    await request(app)
      .get('/health')
      .expect(200)
  })
})
