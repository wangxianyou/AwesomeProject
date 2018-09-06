import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Text, View} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{flex:1,backgroundColor:'steelblue'}}>
                <Image source={pic} style={{flex:1,backgroundColor:'powderblue'}}/>
                <Text style={{flex:1,backgroundColor:'powderblue'}}>Hello world!</Text>
                <Greeting name={'www'}/>
                <Blink text='im a blink'/>
            </View>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{flex:1,backgroundColor:'red'}}> hello {this.props.name} !</Text>
            </View>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.state}
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={{flex:1}}>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({

    red: {
        color: 'red',
        fontWeight:'bold',
        fontSize:30,
    },
    black: {
        color: 'black',
    },
});

