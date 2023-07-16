import { describe, it, expect, beforeAll, afterAll } from 'vitest'

import request from 'supertest'
import { app } from '@/app'

describe('Resgister (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'John doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    })
    expect(response.statusCode).toEqual(201)
  })
})
