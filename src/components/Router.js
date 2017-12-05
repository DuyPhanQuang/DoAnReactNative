import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import Main from './Main/Main';
import Fitness from './Main/Fitness/Fitness';
import Menu from './Main/Menu';
import SignIn from './Authentication/SignIn';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Home from './Home/Home';
import WorkoutSchedule from './WorkoutSchedule/WorkoutSchedule';
import MyWeight from './MyWeight/MyWeight';
import Settings from './Settings/Settings';
import RateTheApp from './RateTheApp/RateTheApp';
import Support from './Support/Support';
import StepOne from './Step/StepOne';
import MainExercises from './Exercises/MainExercises';
import ExercisesFullBody from './Exercises/ExercisesFullBody';
import ExercisesUpperBody from './Exercises/ExercisesUpperBody';
import ExercisesMiddleBody from './Exercises/ExercisesMiddleBody';
import ExercisesLowerBody from './Exercises/ExercisesLowerBody';
import VideoTraining from './VideoTraining/VideoTraining';
import PrepareRunScreen from './RunTracker/screens/PrepareRunScreen';
import RunningScreen from './RunTracker/screens/RunningScreen';
import ResultScreen from './RunTracker/screens/ResultScreen';

export const MainStack = StackNavigator({
    ManHinh_StepOne: {
        screen: StepOne,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_Fitness: {
        screen: Fitness,
        navigationOptions: {
           header: null
        }
    },
    ManHinh_Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_Menu: {
        screen: Menu,
        navigationOptions: {

        }
    },
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {

        }
    },
    ManHinh_WorkoutSchedule: {
        screen: WorkoutSchedule,
        navigationOptions: {

        }
    },
    ManHinh_MyWeight: {
        screen: MyWeight,
        navigationOptions: {

        }
    },
    ManHinh_Settings: {
        screen: Settings,

    },
    ManHinh_RateTheApp: {
        screen: RateTheApp,
        navigationOptions: {

        }
    },
    ManHinh_Support: {
        screen: Support,
        navigationOptions: {

        }
    },
    ManHinh_ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {

        }
    },
    ManHinh_SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_MainExercises: {
        screen: MainExercises,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_VideoTraining: {
        screen: VideoTraining,
        navigationOptions: {
            title: 'Fitness for WeightLoss'
        }
    }
});
export const ExercisesFullBodyStack = StackNavigator({
    ManHinh_FullBody: {
        screen: ExercisesFullBody,
        navigationOptions: {
        }
    }
});
export const ExercisesUpperBodyStack = StackNavigator({
    ManHinh_UpperBody: {
        screen: ExercisesUpperBody,
        navigationOptions: {

        }
    }
});
export const ExercisesMiddleBodyStack = StackNavigator({
    ManHinh_MiddleBody: {
        screen: ExercisesMiddleBody,
        navigationOptions: {

        }
    }
});
export const ExercisesLowerBodyStack = StackNavigator({
    ManHinh_LowerBody: {
        screen: ExercisesLowerBody,
        navigationOptions: {

        }
    }
});

// set exercisestab
export const ExercisesTab = TabNavigator({
    FullBody: {
        screen: ExercisesFullBodyStack,
        navigationOptions: {

        }
    },
    UpperBody: {
        screen: ExercisesUpperBodyStack,
        navigationOptions: {

        }
    },
    MiddleBody: {
        screen: ExercisesMiddleBodyStack,
        navigationOptions: {

        }
    },
    LowerBody: {
        screen: ExercisesLowerBodyStack,
        navigationOptions: {

        }
    }
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
        style: {
            backgroundColor: '#dddddd'
        }
    },

});

// set menu
export const SideMenu = DrawerNavigator({
    // ưu tiên hiển thị MainStack trước
    MainTab: {
        screen: MainStack
    },
}, {
    drawerWidth: 330,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
});

export const RunTracker = StackNavigator(
    {
        PrepareRunScreen: { screen: PrepareRunScreen },
        RunningScreen: { screen: RunningScreen },
        ResultScreen: { screen: ResultScreen }
    },
    {
        mode: 'card',
        headerMode: 'screen',
        initialRouteName: 'PrepareRunScreen',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
              duration: 300,
              easing: Easing.out(Easing.poly(4)),
              timing: Animated.timing,
            },
            screenInterpolator: (sceneProps) => {
              const { layout, position, scene } = sceneProps;
              const { index } = scene;

              const height = layout.initHeight;
              const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
              });

              const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
              });

              return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);
