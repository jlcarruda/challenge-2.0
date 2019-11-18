require('dotenv').config()

const request = require('supertest')
const app = require(`../../../src/app`)

describe('User Controller', () => {

  beforeAll(async () => {
    await app.init()
  })

  it('should respond successfully for requests', async () => {
    const req = await request('localhost:3000').get('/test')
    expect(req.status).toEqual(200)
    expect(req.text).toEqual('Hello World')
  })
})
