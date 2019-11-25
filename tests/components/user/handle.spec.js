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
    request(app).get('/test')
      .expect(200, 'Hello World')
  })

  it('should return 404 status code if queries for a route that does not exists', async () => {
    request(app).get('/test123')
      .expect(404)
  })

  it('should fail if tries to request wrong contract request for POST sign_up', async () => {
    request(app).post('/sign_up')
      .expect(400)
  })
})
