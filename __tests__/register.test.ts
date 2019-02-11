import * as request from 'supertest'
import { app } from '@api/app'
import { Model } from 'objection'

describe('login', () => {
  afterAll(Model.knex().destroy)

  it('can login', async () => {
    await request(app)
      .get('/health')
      .expect(200)
  })

  it('can login', async () => {
    await request(app)
      .get('/health')
      .expect(200)
  })
})
