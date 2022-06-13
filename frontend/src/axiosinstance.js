import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:9000/'
});

// instance.defaults.headers.common['Authorisation'] = 'Auth from instance'

export default instance;