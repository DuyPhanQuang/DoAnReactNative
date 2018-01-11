import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { SideMenu } from './Router';
// import FunctionBar from './Main/Fitness/FunctionBar';
import SignInTwo from './Authentication/SignIn/SignInTwo';
import SignUpTwo from './Authentication/SignUp/SignUpTwo';
import ShowInfo from './Main/ShowInfo';
import Support from './Support/Support';
import RateTheApp from './RateTheApp/RateTheApp';
import WorkoutSchedule from './WorkoutSchedule/WorkoutSchedule';
// StatusBar.setHidden(true);
import BasicFlatList from './Tips/BasicFlatList';
import StartComponent from './Main/Fitness/StartComponent';
import VideoTraining from './VideoTraining/VideoTraining';
import TipOne from './Tips/DetailTips/TipOne';
import MainExercises from './Exercises/MainExercises';
import MyWeight from './MyWeight/MyWeight';
import SignIn from './Authentication/SignIn';
import FinishedTrainingDay from './Main/Fitness/FinishedTrainingDay';

export default class AppSrc extends Component {
    render() {
        return (
            // <SignIn />
            // <VideoTraining />
            // <StartComponent />
            // <BasicFlatList />
             <SideMenu />
            // <FinishedTrainingDay />
            // <Test />
            // <MainExercises />
            // <TipOne />
            // <Description />
            // <WorkoutSchedule />
            // <RateTheApp />
            // <Support />
            // <ShowInfo />
            // <SignInTwo />
            // <SignUpTwo />
            //  <TrainingExerciseOne />
            // <FunctionBar />
            // <TrainingOne />
        );
    }
}
