import axios from 'axios'

export default {
  getAll: async (term = '') => {
    try {
      const res = await axios.get(`http://localhost:3000/student?term=${term}`);
      return res.data;
    }
    catch({data:{error_code:codeError}}) {
      console.log(codeError)
    }
  },

  createOne: async (data) => {
    return axios.post('http://localhost:3000/student', data).then(response => response.data)
  },

  updateOne: async (data) => {
    return axios.put(`http://localhost:3000/student/${data.id}`, data).then(response => response.data)
  },

  deleteOne: async (id) => {
    return axios.delete(`http://localhost:3000/student/${id}`).then(response => response.data)
  }
}