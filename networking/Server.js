import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const apiGetAllTips = 'https://doan-fitness.herokuapp.com/tips';
// const apiGetAllAboutWeightLoss = 'http://10.0.137.5:3000/aboutweightloss';
const apiGetAllTrainingData = 'https://doan-fitness.herokuapp.com/trainingdata';
const apiGetAllExFullbody = 'https://doan-fitness.herokuapp.com/exfullbody';
const apiGetAllExTopbody = 'https://doan-fitness.herokuapp.com/extopbody';
const apiGetAllExMidbody = 'https://doan-fitness.herokuapp.com/exmidbody';
const apiGetAllExBottombody = 'https://doan-fitness.herokuapp.com/exbottombody';

async function getTipsFromServer() {
    try {
        let response = await fetch(apiGetAllTips);
        let responseJson = await response.json();
        return responseJson; //list of tips db
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
};
async function getTrainingDataFromServer() {
    try {
        let response = await fetch(apiGetAllTrainingData);
        let responseJson = await response.json();
        return responseJson; //list of trainingday db
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExFullbodyFromServer() {
    try {
        let response = await fetch(apiGetAllExFullbody);
        let responseJson = await response.json();
        return responseJson; //list of db exfullbody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExTopbodyFromServer() {
    try {
        let response = await fetch(apiGetAllExTopbody);
        let responseJson = await response.json();
        return responseJson; //list of db extopbody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExMidbodyFromServer() {
    try {
        let response = await fetch(apiGetAllExMidbody);
        let responseJson = await response.json();
        return responseJson; //list of db exmidbody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExBottombodyFromServer() {
    try {
        let response = await fetch(apiGetAllExBottombody);
        let responseJson = await response.json();
        return responseJson; //list of db exbottombody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
export {getTipsFromServer};
export {getTrainingDataFromServer};
export {getExFullbodyFromServer};
export {getExTopbodyFromServer};
export {getExMidbodyFromServer};
export {getExBottombodyFromServer};
