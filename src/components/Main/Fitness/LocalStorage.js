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

<<<<<<< HEAD
function setTrainingData(obj) {
    AsyncStorage.setItem('data', JSON.stringify(obj), err => alert(err));
=======
function setTrainingData(arr) {
    const data = JSON.stringify(arr);
    console.log(data);
    AsyncStorage.setItem('trainingdata', data, error => console.log(error))
        .then(console.log('success'));
}

async function getProgress() {
    let data = [];
    await getTrainingData().then((val) => { data = val; });
    const count = data.reduce(
        (a, b) => {
            if (b === true)
                return a + 1;
            return 0;
        }
        , 0
    );

    return count / data;
>>>>>>> 67054dbbdab494541fca9cd6d1ac9a3ec409dc18
}

export { getTrainingData };
export { setTrainingData };
export { getProgress };
