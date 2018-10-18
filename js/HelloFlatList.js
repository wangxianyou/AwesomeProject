import React, {Component} from 'react'
import {FlatList, Text,StyleSheet,View} from 'react-native'

export default class HelloFlatList extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={[
                        {key: "haha"},
                        {key: "haha"},
                        {key: "haha"},
                        {key: "haha"},
                        {key: "haha"},
                        {key: "haha"},
                        {key: "haha"},
                        {key: "haha"},
                        {key: "haha"},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item:{
        fontSize:16,
        color:'red',
        flex:1,
        textAlign:'center',
        textAlignVertical:'center',
        height:44
    }
});