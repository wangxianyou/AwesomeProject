import React, {Component} from 'react';
import {View,ScrollView, Image,Text} from 'react-native';

export default class HelloScrollview extends Component {
    render() {
        let pic={uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return (
            <View style={{height:100}}>
                <ScrollView horizontal={true} style={{height:100}}>
                    <Text style={{fontSize: 29}}>Scroll me plz</Text>
                    <Image source={pic} style={{width:100,height:100, backgroundColor: 'powderblue'}}/>
                    <Text style={{fontSize: 29}}>If you like</Text>
                    <Image source={pic} style={{width:100,height:100, backgroundColor: 'powderblue'}}/>
                    <Text style={{fontSize: 29}}>Scrolling down</Text>
                    <Text style={{fontSize: 29}}>What's the best</Text>
                    <Text style={{fontSize: 29}}>Framework around?</Text>
                    <Text style={{fontSize: 28}}>React Native</Text>
                </ScrollView>
            </View>

        );
    }
}