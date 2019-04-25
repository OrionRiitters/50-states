import axios from 'axios';

export default {
    getAll() {
        return axios.get('/api/states/').then( res => {
            return res.data;
        });
    }
}
