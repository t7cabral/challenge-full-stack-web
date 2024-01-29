import { faker } from '@faker-js/faker';
import database from '../../src/database';

const TABLE_NAME = 'studentRegistration'

export { generateStudent, createOne, createMany, clearTable }

const generateStudent = () => {
  return {
    id: faker.finance.maskedNumber({ length: 50, parens: false, ellipsis: false }),
    cpf: faker.finance.maskedNumber({ length: 11, parens: false, ellipsis: false }),
    name: faker.person.fullName(),
    email: faker.internet.email(),
  };
}

const createOne = async function (): Promise<void> {
  await createMany(1);
}

const createMany = async function (count: number): Promise<void> {
  const data = faker.helpers.multiple(generateStudent, { count })
  await database(TABLE_NAME).insert(data);
}

const clearTable = async function (): Promise<void> {
  await database(TABLE_NAME).truncate()
}
