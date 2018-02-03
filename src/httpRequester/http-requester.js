const axios = require('axios').default;

module.exports = {
    get: (url, config) => {
        return axios.get(url, config)
    },

    post: (url, data, config) => {
        return axios.post(url, data, config);
    },

    request: (config) => {
        return axios(config);
    },
};