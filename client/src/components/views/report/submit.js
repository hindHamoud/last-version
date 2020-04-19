import axios from 'axios'


export const submitPlan = newIncident => {
  return axios
    .post('http://localhost:5000/api/incident/add', {
        admin: newIncident.admin,
        incidentDate: newIncident.incidentDate,
        incidentName: newIncident.incidentName,
        incidentCriticality: newIncident.incidentCriticality,
        name: newIncident.name,
        address: newIncident.address,
        mobile: newIncident.mobile,
        email: newIncident.email,
        departmentAffected: newIncident.departmentAffected,
        incidentDescription: newIncident.incidentDescription,
        resolutionDiscretion: newIncident.resolutionDiscretion,
        recommendation: newIncident.recommendation,
      
      
    })
    .then(response => {
      console.log('add')
    })
}