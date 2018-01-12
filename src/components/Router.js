import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Easing, Animated, Image, StyleSheet } from 'react-native';
import Main from './Main/Main';
import Fitness from './Main/Fitness/Fitness';
import Menu from './Main/Menu';
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
import BasicFlatList from './Tips/BasicFlatList';
import TipsItem from './Tips/TipsItem';
import TipOne from './Tips/DetailTips/TipOne';
import StartComponent from './Main/Fitness/StartComponent';
import { DEVICE_HEIGHT } from './Constants/AppConstants';
import { BACKGROUND_TABBAR, APP_THEME } from './Constants/Color';
// import SignInTwo from './Authentication/SignIn/SignInTwo';
import SignUpTwo from './Authentication/SignUp/SignUpTwo';
import SignIn from './Authentication/SignIn';
import DetailExercisesFull from './Exercises/DetailExercisesFull';
import DetailExercisesTop from './Exercises/DetailExercisesTop';
import DetailExercisesMid from './Exercises/DetailExercisesMid';
import DetailExercisesBottom from './Exercises/DetailExercisesBottom';
import FinishedTrainingDay from './Main/Fitness/FinishedTrainingDay';

export const MainStack = StackNavigator({
    ManHinh_SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
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
    ManHinh_FinishedTrainingDay: {
        screen: FinishedTrainingDay,
        navigationOptions: {
            title: 'Workout',
            headerTintColor: APP_THEME,
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
            title: 'Home',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_WorkoutSchedule: {
        screen: WorkoutSchedule,
        navigationOptions: {
            title: 'Workout Schedule',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_MyWeight: {
        screen: MyWeight,
        navigationOptions: {
            title: 'Your Weight',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_RateTheApp: {
        screen: RateTheApp,
        navigationOptions: {
            title: 'Rate the app! Please 5 stars ^_^',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_Support: {
        screen: Support,
        navigationOptions: {
            title: 'Support',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            title: 'Change your infomation',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_MainExercises: {
        screen: MainExercises,
        navigationOptions: {
            title: 'Exercises',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_VideoTraining: {
        screen: VideoTraining,
        navigationOptions: {
            title: 'Fitness for WeightLoss',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_BasicFlatList: {
        screen: BasicFlatList,
        navigationOptions: {
            title: 'Tips for all weight loss',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_TipsItem: {
        screen: TipsItem
    },
    ManHinh_TipOne: {
        screen: TipOne,
        navigationOptions: {
            title: 'Details tips',
            headerTintColor: APP_THEME,
        }
    },
    ManHinh_RunTracker: { screen: PrepareRunScreen },
    ManHinh_Running: { screen: RunningScreen },
    ManHinh_Result: {
        screen: ResultScreen,
        headerMode: 'none',
        
        navigationOptions: {
            headerVisible: false,
            header: null,
        }
     }
});
export const ExercisesFullBodyStack = StackNavigator({
    ManHinh_FullBody: {
        screen: ExercisesFullBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_fullbody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
            header: null

        }
    },
    ManHinh_DetailExercisesFull: {
        screen: DetailExercisesFull,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_fullbody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
        }
    },
});
export const ExercisesUpperBodyStack = StackNavigator({
    ManHinh_UpperBody: {
        screen: ExercisesUpperBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_topbody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
            header: null
        }
    },
    ManHinh_DetailExercisesTop: {
        screen: DetailExercisesTop,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_topbody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
        }
    },
});
export const ExercisesMiddleBodyStack = StackNavigator({
    ManHinh_MiddleBody: {
        screen: ExercisesMiddleBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_middlebody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
            header: null
        }
    },
    ManHinh_DetailExercisesMid: {
        screen: DetailExercisesMid,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_middlebody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
        }
    },
});
export const ExercisesLowerBodyStack = StackNavigator({
    ManHinh_LowerBody: {
        screen: ExercisesLowerBody,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_lowerbody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
            header: null
        }
    },
    ManHinh_DetailExercisesBottom: {
        screen: DetailExercisesBottom,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../Media/appicon/ic_lowerbody.png')}
                  style={[styles.icon, { tintColor }]}
                />
            ),
        }
    },
});

// set exercisestab
export const ExercisesTab = TabNavigator({
    FullBody: {
        screen: ExercisesFullBodyStack,
        navigationOptions: {
            tabBarLabel: 'Full body',
        }
    },
    UpperBody: {
        screen: ExercisesUpperBodyStack,
        navigationOptions: {
            tabBarLabel: 'Top body'
        }
    },
    MidBody: {
        screen: ExercisesMiddleBodyStack,
        navigationOptions: {
            tabBarLabel: 'Mid body'
        }
    },
    LowerBody: {
        screen: ExercisesLowerBodyStack,
        navigationOptions: {
            tabBarLabel: 'Bottom body'
        }
    }
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
        style: {
            backgroundColor: '#9C9C9C'
        },
        labelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
        },
        tabStyle: {
            height: DEVICE_HEIGHT / 11
        },
        activeTintColor: APP_THEME,
        showIcon: true,
        upperCaseLabel: false,
        pressColor: APP_THEME
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

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    }
});
// export const RunTrackerStack = StackNavigator(
//     {
//         PrepareRunScreen: { screen: PrepareRunScreen },
//         RunningScreen: { screen: RunningScreen },
//         ResultScreen: { screen: ResultScreen }
//     },
//     {
//         mode: 'card',
//         headerMode: 'screen',
//         initialRouteName: 'PrepareRunScreen',
//         navigationOptions: {
//             gesturesEnabled: false,
//         },
//         transitionConfig: () => ({
//             transitionSpec: {
//               duration: 300,
//               easing: Easing.out(Easing.poly(4)),
//               timing: Animated.timing,
//             },
//             screenInterpolator: (sceneProps) => {
//               const { layout, position, scene } = sceneProps;
//               const { index } = scene;

//               const height = layout.initHeight;
//               const translateY = position.interpolate({
//                 inputRange: [index - 1, index, index + 1],
//                 outputRange: [height, 0, 0],
//               });

//               const opacity = position.interpolate({
//                 inputRange: [index - 1, index - 0.99, index],
//                 outputRange: [0, 1, 1],
//               });

//               return { opacity, transform: [{ translateY }] };
//             },
//         }),
//     }
// );
