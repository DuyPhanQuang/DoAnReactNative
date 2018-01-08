import { AsyncStorage } from 'react-native';

function getTrainingData(callback) {
    const obj = AsyncStorage.getItem('data', callback)
        .then(value => JSON.parse(value));
    return obj;
}

function setTrainingData(obj) {
    AsyncStorage.setItem('data', JSON.stringify(obj), err => alert(err.message));
}

export { getTrainingData };
export { setTrainingData };
