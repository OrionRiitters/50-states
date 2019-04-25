import axios from 'axios';

export default {
    // Return all states from API
    getAll() {
        return axios.get('/api/states/').then( res => {
            return res.data;
        });
    },
    // Update value of State in database
    setVisited(stateName, visited) {
        return axios.patch('/api/state/' + stateName, { visited: visited })
            .then(response => {
                return response.data;
            });
    },
    // Return one state from API based on state name
    getOne(stateName) {
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data;
        });
    }
};
