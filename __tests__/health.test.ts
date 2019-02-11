import * as request from 'supertest'
import { app } from '@api/app'

describe('health', () => {
  it('returns 200', async () => {
    await request(app)
      .get('/health')
      .expect(200)
  })
})
