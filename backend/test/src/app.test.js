'use strict';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import { app } from '../../src/app.js';

describe('Express App', () => {
  it('should respond with a 404 error message for undefined routes', async () => {
    const response = await request(app).get('/undefined/route');
    expect(response.status).to.equal(404);
  });
});
