import axios from 'axios';

exports.Login = async function (Email, Password) {
    console.log('API LOGIN');
    let url = 'https://doan-fitness.herokuapp.com/api/login';
    return axios.post(url, {
        email: Email,
        password: Password,
    });
};