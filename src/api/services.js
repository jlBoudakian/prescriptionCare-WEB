import axios from 'axios';

export default {
    users: {
        read: (cancelToken) => requestAPI('GET', '/users', null, { cancelToken }),
        readById: (id, cancelToken) => requestAPI('GET', `/users/${id}`, null, { cancelToken }),
        create: (data, cancelToken) => requestAPI('POST', '/users', data, { cancelToken }),
        update: (id, data, cancelToken) => requestAPI('PUT', `/users/${id}`, data, { cancelToken }),
        delete: (id, cancelToken) => requestAPI('DELETE', `/users/${id}`, null, { cancelToken })
    },
    medicines: {
        read: (cancelToken) => requestAPI('GET', '/medicines', null, { cancelToken }),
        readById: (id, cancelToken) => requestAPI('GET', `/medicines/${id}`, null, { cancelToken }),
        create: (data, cancelToken) => requestAPI('POST', '/medicines', data, { cancelToken }),
        update: (id, data, cancelToken) => requestAPI('PUT', `/medicines/${id}`, data, { cancelToken }),
        delete: (id, cancelToken) => requestAPI('DELETE', `/medicines/${id}`, null, { cancelToken })
    },
    schedule: {
        read: (cancelToken) => requestAPI('GET', '/scheduling', null, { cancelToken }),
        readById: (id, cancelToken) => requestAPI('GET', `/scheduling/${id}`, null, { cancelToken }),
        create: (data, cancelToken) => requestAPI('POST', '/scheduling', data, { cancelToken }),
        update: (id, data, cancelToken) => requestAPI('PUT', `/scheduling/${id}`, data, { cancelToken }),
        delete: (id, cancelToken) => requestAPI('DELETE', `/scheduling/${id}`, null, { cancelToken })
    },
    authentication: {
        login: (data, cancelToken) => requestAPI('POST', '/authentication', data, { cancelToken })
    },
    cancelToken: axios.CancelToken
}


// const proxy = {
//     proxy: {
//         host: '127.0.0.1',
//         port: 8080,
//     }
// };

const apiLink = 'http://localhost:8080/api'

function requestAPI(method, path, data, options = {}) {

    let url = apiLink + path;

    const requestOptions = {
        headers: {},
        json: true,
        formdata: false,
        ...options,
        method
    }

    // Se método for diferente de GET e DELETE (ex: POST)
    if (!['GET', 'DELETE'].includes(method.toUpperCase())) {
        if (requestOptions.json) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.data = JSON.stringify(data);
        } else if (requestOptions.formdata) {
            requestOptions.data = data;
            requestOptions.headers['Content-Type'] = 'multipart/form-data';
        }

    }

    // Se o pedido não for público vai buscar o token
    if (!requestOptions.public) {
        requestOptions.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
    }


    if (method.toUpperCase() === 'GET' && data) {
        const getParams = Object
            .entries(data)
            .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
            .join('&')
        url += '?' + getParams
    }
    return axios(url, requestOptions)
        .then((response) => {
            // console.log(response);
            return response;
        })
        .catch((error) => console.log(error));
}
