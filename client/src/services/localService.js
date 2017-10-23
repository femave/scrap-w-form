import axios from 'axios'

export default {
  getData: () => {
    const URL = `http://localhost:3001`
    return axios.get(URL)
    .then(console.log)
  }

}