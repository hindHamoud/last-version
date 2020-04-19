import axios from 'axios'


export const submitPlan = newPlan => {
  return axios
    .post('http://localhost:5000/api/plan/add', {
        admin: newPlan.admin,
        fireIncident: newPlan.fireIncident,
        electricityIncident: newPlan.electricityIncident,
        attackIncident: newPlan.attackIncident,
        internalContact: newPlan.internalContact,
        externalContact: newPlan.externalContact,
        team: newPlan.team,
        human: newPlan.human,
        equipmemt: newPlan.equipmemt,
        system: newPlan.system,
      
      
    })
    .then(response => {
      console.log('add')
    })
}
