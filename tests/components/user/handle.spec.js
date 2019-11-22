require('dotenv').config()

const request = require('supertest')
const app = require(`../../../src/app`)

describe('User Controller', () => {
  let server;
  beforeAll(async () => {
    server = await app.init('mongodb://localhost:27017/test')
  })

  afterAll(async () => {
    server.close()
  })

  it('should respond successfully for requests', async () => {
    const req = await request('localhost:8080').get('/test')
    expect(req.status).toEqual(200)
    expect(req.text).toEqual('Hello World')
  })

  it('should return 404 status code if queries for a route that does not exists', async () => {
    const req = await request('localhost:8080').get('/test123')
    expect(req.status).toEqual(404)
  })
})
