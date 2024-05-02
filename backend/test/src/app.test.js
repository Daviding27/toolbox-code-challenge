const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const { app } = require('../../src/app.js');

describe('Express App', () => {
  it('should respond with a 404 error message for undefined routes', async () => {
    const response = await request(app).get('/undefined/route');
    expect(response.status).to.equal(404);
  });
});
