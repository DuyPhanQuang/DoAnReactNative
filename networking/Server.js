
const apiGetAllTips = 'https://doan-fitness.herokuapp.com/tips';
// const apiGetAllAboutWeightLoss = 'http://10.0.137.5:3000/aboutweightloss';
// const apiGetAllTrainingData = 'https://doan-fitness.herokuapp.com/trainingdata';
const apiGetAllTrainingData = 'https://doan-fitness.herokuapp.com/getdulieu/trainingdata';
const apiGetAllExFullbody = 'https://doan-fitness.herokuapp.com/exfullbody';
const apiGetAllExTopbody = 'https://doan-fitness.herokuapp.com/extopbody';
const apiGetAllExMidbody = 'https://doan-fitness.herokuapp.com/exmidbody';
const apiGetAllExBottombody = 'https://doan-fitness.herokuapp.com/exbottombody';

async function getTipsFromServer() {
    try {
        const response = await fetch(apiGetAllTips);
        const responseJson = await response.json();
        return responseJson; // list of tips db
    } catch (error) {
        // console.error(`Error is : ${error}`);
        return null;
    }
}
async function getTrainingDataFromServer() {
    try {
        const response = await fetch(apiGetAllTrainingData);
        const responseJson = await response.json();
        return responseJson; // list of trainingday db
    } catch (error) {
        // console.error(`Error is: ${error}`);
        return null;
    }
}
async function getExFullbodyFromServer() {
    try {
        const response = await fetch(apiGetAllExFullbody);
        const responseJson = await response.json();
        return responseJson; // list of db exfullbody
    } catch (error) {
        // console.error(`Error is: ${error}`);
        return null;
    }
}
async function getExTopbodyFromServer() {
    try {
        const response = await fetch(apiGetAllExTopbody);
        const responseJson = await response.json();
        return responseJson; // list of db extopbody
    } catch (error) {
        // console.error(`Error is: ${error}`);
        return null;
    }
}
async function getExMidbodyFromServer() {
    try {
        const response = await fetch(apiGetAllExMidbody);
        const responseJson = await response.json();
        return responseJson; // list of db exmidbody
    } catch (error) {
        // console.error(`Error is: ${error}`);
        return null;
    }
}
async function getExBottombodyFromServer() {
    try {
        const response = await fetch(apiGetAllExBottombody);
        const responseJson = await response.json();
        return responseJson; // list of db exbottombody
    } catch (error) {
        // console.error(`Error is: ${error}`);
        return null;
    }
}
export { getTipsFromServer };
export { getTrainingDataFromServer };
export { getExFullbodyFromServer };
export { getExTopbodyFromServer };
export { getExMidbodyFromServer };
export { getExBottombodyFromServer };
