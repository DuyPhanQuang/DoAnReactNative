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
import Description from './Tips/Description';
import StartComponent from './Main/Fitness/StartComponent';
import VideoTraining from './VideoTraining/VideoTraining';

export default class AppSrc extends Component {
    render() {
        return (
            // <VideoTraining />
            // <StartComponent />
            // <BasicFlatList />
            // <SideMenu />
            <Description />
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
