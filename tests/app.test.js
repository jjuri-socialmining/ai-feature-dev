const request = require('supertest');
const app = require('../src/app');

describe('GET /api', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello from IgniteTech AI Challenge!');
  });
});
