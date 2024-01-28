import axios from 'axios'

const URL_BASE = 'https://api.github.com/users'

export default {
  getUser: async (user) => {
    try {
      const res = await axios.get(`${URL_BASE}/${user}`)
      return res.data;
    }
    catch({data:{error_code:codeError}}) {
      console.log(codeError)
    }
  },
}