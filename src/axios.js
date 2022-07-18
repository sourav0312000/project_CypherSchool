import axios from 'axios';

const instance = axios.create({
    // local API endpoint
    baseURL: 'http://localhost:5001/unofficial-a6378/us-central1/api'
})

export default instance;