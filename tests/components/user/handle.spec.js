require('dotenv').config()

const request = require('supertest')
const server = require(`../../../src/app`)

describe('User Controller', () => {
  let app;

  beforeAll(async () => {
    await server.init()
    app = server.app
  })

  it('should respond successfully for requests', async () => {
    const req = await request(app).get('/test')
    expect(req.status).toEqual(200)
    expect(req.text).toEqual('Hello World')
  })

  it('should return 404 status code if queries for a route that does not exists', async () => {
    const req = await request(app).get('/test123')
    expect(req.status).toEqual(404)
  })
})
