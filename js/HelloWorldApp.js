import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _onPressBotton() {
        alert('点击了我')
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{flex: 1}}>
                <Image source={pic} style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <Text style={{flex: 1, backgroundColor: 'powderblue'}}>Hello world!</Text>
                <Greeting name='wwwwwwww'/>
                <Blink text='im a blink' style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 1, padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
                <Button onPress={this._onPressBotton} title="点我"/>
                <View style={{flex:1,flexDirection: 'row'}}>
                    <TouchableHighlight style={{flex:1}} onPress={this._onPressBotton} >
                        <View style={{flex:1,backgroundColor: 'powderblue'}}>
                            <Text>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity style={{flex:1}} onPress={this._onPressBotton}>
                        <View style={{flex:1,backgroundColor: '#858'}}>
                            <Text>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableNativeFeedback style={{flex:1}} onPress={this._onPressBotton}>
                        <View style={{flex:1,backgroundColor: 'red'}}>
                            <Text>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableWithoutFeedback style={{flex:1}} onPress={this._onPressBotton}>
                        <View style={{flex:1,backgroundColor: '#3a3a3a'}}>
                            <Text>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#666666'}}>
                <Text style={{backgroundColor: 'red', textAlign: 'center'}}> hello {this.props.name} !</Text>
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
            <Text style={{
                flex: 1,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: '#888888'
            }}>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({

    red: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
    black: {
        color: 'black',
    },
});

