import { AsyncStorage } from 'react-native';

async function getTrainingData(callback) {
    let obj;
    await AsyncStorage.getItem('trainingdata', callback)
        .then((value) => {
            // console.log(value);
            obj = JSON.parse(value);
        });
    // console.log(obj);
    return obj;
}

function setTrainingData(arr) {
    const data = JSON.stringify(arr);
    // console.log(data);
    AsyncStorage.setItem('trainingdata', data)
        .then();
}

async function getProgress() {
    let data = [];
    await getTrainingData().then((val) => { data = val; });
    const count = data.reduce(
        (a, b) => {
            if (b === true)
                return a + 1;
            return a;
        }
        , 0
    );
    return count / data.length;
}

export { getTrainingData };
export { setTrainingData };
export { getProgress };
