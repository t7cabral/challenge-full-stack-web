import request from 'supertest'
import HttpStatus from 'http-status-codes';
import app from '../../src/app'

import * as StudentBuilder from '../data_builders/students.builders'

const ROUTE_BASE = '/student';

beforeAll(async () => {
  await StudentBuilder.clearTable()
});

describe.skip('GET /student', () => {
  beforeAll(async () => (await StudentBuilder.createMany(5)))

  it('Validates return properties', async () => {
    const response = await request(app).get(ROUTE_BASE)
    const student = response.body[0]
    expect(student).toHaveProperty('id')
    expect(student).toHaveProperty('cpf')
    expect(student).toHaveProperty('name')
    expect(student).toHaveProperty('email')
    expect(student).toHaveProperty('createdAt')
  });

  it('must return registered students', async () => {
    const response = await request(app).get(ROUTE_BASE)
    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body).toHaveLength(5);
  });
})

describe('POST /student', () => {
  it('should record successfully', async () => {
    const data = await StudentBuilder.generateStudent()

    const response = await request(app)
      .post(ROUTE_BASE)
      .send(data)

    const { status, body } = response;
    expect(status).toBe(HttpStatus.CREATED);
    expect(body).toHaveProperty('id', data.id)
    expect(body).toHaveProperty('cpf', data.cpf)
    expect(body).toHaveProperty('name', data.name)
    expect(body).toHaveProperty('email', data.email)
    expect(body).toHaveProperty('createdAt')
  });
});
