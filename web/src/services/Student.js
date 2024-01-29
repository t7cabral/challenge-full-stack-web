import axios from 'axios'
import { ERRORS as StudentErrors } from '../error/Student.ts'

const URL_BASE = 'http://localhost:3000'

export default {
  getAll: async (term = '') => {
    try {
      const res = await axios.get(`${URL_BASE}/student?term=${term}`);
      return res.data;
    } catch({response:{data}}) {
      const code = data?.errorCode ?? 'ERR_DEFAULT';
      throw new CustomError (code, StudentErrors[code])
    }
  },

  createOne: async (data) => {
    try {
      const response = await axios.post(`${URL_BASE}/student`, data)
      console.log(response)
      return response.data
    } catch({response:{data}}) {
      const code = data?.errorCode ?? 'ERR_DEFAULT';
      throw new CustomError (code, StudentErrors[code])
    }
  },

  updateOne: async (data) => {
    try {
      const response = await axios.put(`${URL_BASE}/student/${data.id}`, data)
      return response.data
    } catch({response:{data}}) {
      const code = data?.errorCode ?? 'ERR_DEFAULT';
      throw new CustomError (code, StudentErrors[code])
    }
  },

  deleteOne: async (id) => {
    try {
      const response = await axios.delete(`${URL_BASE}/student/${id}`)
      return response.data
    } catch({response:{data}}) {
      const code = data?.errorCode ?? 'ERR_DEFAULT';
      throw new CustomError (code, StudentErrors[code])
    }
  }
}

function CustomError (code, message) {
  this.code = code;
  this.message = message;
}
