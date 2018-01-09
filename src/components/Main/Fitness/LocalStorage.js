import { AsyncStorage } from 'react-native';

async function getTrainingData(callback) {
    let obj;
    await AsyncStorage.getItem('trainingdata', callback)
        .then((value) => {
            console.log(value);
            obj = JSON.parse(value);
        });
    console.log(obj);
    return obj;
}

function setTrainingData(arr) {
    const data = JSON.stringify(arr);
    console.log(data);
    AsyncStorage.setItem('trainingdata', data, error => console.log(error))
        .then(console.log('success'));
}

export { getTrainingData };
export { setTrainingData };
