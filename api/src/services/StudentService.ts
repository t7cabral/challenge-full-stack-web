import database from '../database';

export { getOne, getAll, createOne, updateOne, deleteOne };

const tableName = 'studentRegistration'

const getOne = (id: string) => {
  return database
    .where({ id })
    .select('id', 'name', 'email', 'cpf', 'createdAt')
    .from(tableName)
    .where('flagDelete', '=', 0)
    .first();
}

const getAll = (term: string) => {
  return database
    .select('id', 'name', 'email', 'cpf', 'createdAt')
    .table(tableName)
    .where('flagDelete', '=', 0)
    .whereILike('name', `%${term}%`)

}

const createOne = async (data: any) => {
  await database.insert(data).into(tableName);
  return getOne(data.id);
}

const updateOne = async (id: string, data: any) => {
  await database(tableName)
    .where({ id })
    .first()
    .where('flagDelete', '=', 0)
    .update(data, ['name']);
  return getOne(id);
}

const deleteOne = async (id: string) => {
  return database(tableName)
    .where({ id })
    .update({ flagDelete: 1 }, ['flagDelete']);
}
