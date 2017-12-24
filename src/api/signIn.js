import AsyncStorage from 'react-native';

const signIn = () => (
    fetch('http://10.0.137.5:3000/api/login',
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    })
    .then((response) => response.json())
    .then((res) => {
        console.log('response: ', res);
        if (res.success === true) {
            AsyncStorage.setItem('users', res.users);
            this.props.navigation.navigate('ManHinh_StepOne');
        } else {
            console.log(res);
        }
    })
    .done()
);

module.exports = signIn;