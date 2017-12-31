import axios from 'axios';

exports.Login = function (Email, Password) {
    console.log('API LOGIN');
    let url = 'http://10.0.137.5:3000/api/login';
    return axios.post(url, {
        email: Email,
        password: Password,
    });
};