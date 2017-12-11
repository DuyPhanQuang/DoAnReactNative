import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TrainingItem from './TrainingItem';
import { getTrainingDayFromServer } from '../../../../networking/Server';

<<<<<<< HEAD
class FlatListItem extends Component {
    render() {
        const { wrapper, title, titleText1, titleText2, body, 
            cardio, moreWorkouts, icon, info, infoText, detailText, button,
            buttonText
        } = styles;  
        return (
            <View style={wrapper} >
                <View style={title} >                   
                        <Text style={titleText1} >Today</Text>
                        <Text style={titleText2} >{this.props.item.Name}</Text>
                </View>
                <View style={body} >
                    <View style={cardio} >
                        <View >
                            <Image
                            source={icNumberOne}
                            style={icon}
                            resizeMode='contain' 
                            />
                        </View>
                        <View style={info}>
                            <Text style={infoText} >Cardio</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={detailText} >{this.props.item.TotalTime} minutes</Text>
                                <Text style={detailText} >{this.props.item.TotalExercises} exercises</Text>
                            </View>    
                        </View>
                        <View >
                            <TouchableOpacity 
                            activeOpacity={0.5} 
                            onPress={() => { alert(this.props.item.Note); }}
                            >
                                <Image 
                                source={icInfo}
                                style={icon}
                                resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>   
                    </View>   

                    <View style={moreWorkouts} >
                        <View >
                            <Image
                            source={icStar}
                            style={icon}
                            resizeMode='contain' 
                            />
                        </View>
                        <View style={info}>
                            <Text style={infoText} >Add more Workouts</Text>
                            <View>
                                <Text style={detailText} >
                                To boost your results.</Text>                               
                            </View>    
                        </View>

                    </View>

                        <TouchableOpacity 
                        activeOpacity={0.5} 
                        onPress={this.props.onPress}
                        >
                            <View style={button} >
                                <Text style={buttonText} >START</Text>
                            </View>
                        </TouchableOpacity>   

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: DEVICE_HEIGHT * 0.65,
        backgroundColor: '#FFF',
        marginTop: DEVICE_HEIGHT * 0.02,
        marginBottom: DEVICE_HEIGHT * 0.02,
        width: DEVICE_HEIGHT * 0.5,
        borderRadius: 20, 
        paddingHorizontal: 20,
        marginLeft: DEVICE_HEIGHT * 0.05,      
    },
    title: {
        flex: 1,
        paddingVertical: 30,
        borderColor: 'transparent',
        borderWidth: 2,
        borderBottomColor: '#E5E5E5',
        // shadowColor: '#5f5555'
    },
    titleText1: {
        fontSize: 25,
        fontFamily: 'Cochin',
        color: '#818383'
    },
    titleText2: {
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#505050'
    },
    body: {
        flex: 4
    },
    cardio: {
        flexDirection: 'row',
        paddingVertical: 30
    },
    icon: {
        width: 35,
        height: 35,
    },
    info: {
        flex: 1,
        paddingHorizontal: 20
    },
    infoText: {
        fontFamily: 'Cochin',
        fontSize: 25,
        color: '#505050'
    },
    detailText: {
        fontFamily: 'Cochin',
        fontSize: 15,
        color: '#818383',
        paddingRight: 30
    },
    moreWorkouts: {
        flexDirection: 'row',
        paddingBottom: 50
    },
    button: {
        height: DEVICE_HEIGHT * 0.08,
        backgroundColor: '#FFBF57',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF'
    }
});

=======
>>>>>>> 6e36faf92bc04ef86525f4ae47c2477d2452e97b
export default class StartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            trainingdayFromServer: [],
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getTrainingDayFromServer().then((trainingday) => {
            this.setState({ trainingdayFromServer: trainingday });
        }).catch((error) => {
            this.setState({ trainingdayFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
<<<<<<< HEAD
                <FlatList 
                    data={this.state.trainingdayFromServer}
                    renderItem={({ item, index }) => {
                        return (
                        <FlatListItem 
                        item={item} 
                        index={index}  
                        >
                        </FlatListItem>);
                    }}
                    keyExtractor={(item, index) => item.Name}
                    horizontal
                >
                </FlatList>
=======
                <FlatList
                  data={this.state.trainingdayFromServer}
                  renderItem={({ item, index }) => (
                        <TrainingItem
                          item={item}
                          index={index}
                          onPress={this.props.onPress}
                        />)}
                  keyExtractor={(item, index) => item.Name}
                  horizontal
                />
>>>>>>> 6e36faf92bc04ef86525f4ae47c2477d2452e97b
            </View>
        );
    }
}
