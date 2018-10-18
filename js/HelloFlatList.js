import React, {Component} from 'react'
import {FlatList, Text, StyleSheet, View, ActivityIndicator} from 'react-native'

export default class HelloFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch("https://facebook.github.io/react-native/movies.json")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSourse: responseJson.movies
                })
            }).catch((e) => {
                console.log(e)
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingstyle}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }

        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.dataSourse}
                    renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
                    keyExtractor = {(item,index) => item.id}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        color: 'red',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 44
    },

    loadingstyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:8
    }
});