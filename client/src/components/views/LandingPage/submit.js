import axios from 'axios'


export const submitSupport = newIncident => {
  return axios
    .post('http://localhost:5000/api/support/send', {
        type: newIncident.type,
        email: newIncident.email,
        problem: newIncident.problem,
    })
    .then(response => {
      console.log('add')
    })
}