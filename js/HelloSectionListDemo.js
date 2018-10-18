import React, {Component} from 'react'
import {View, SectionList, Text, StyleSheet} from 'react-native'

export class HelloSectionList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'aaaa', data: ['111', '222', '333', '444']},
                        {title: 'bbbb', data: ['555', '666','777']}
                    ]}
                    renderItem={({item}) => <View style={{backgroundColor: '#795'}}>
                        <Text style={styles.item}>{item}</Text>
                    </View>}
                    renderSectionHeader={({section}) => <View style={{backgroundColor: '#298'}}>
                        <Text style={styles.header}>{section.title}</Text>
                    </View>}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent = {this._separator}
                    // SectionSeparatorComponent = {this._itemSeparatorComponent}
                    SectionSeparatorComponent={()=><View style={{height:20,backgroundColor:'blue'}}></View>}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                />
            </View>
        );
    }
    _separator = () => {
        return <View style={{height:2,backgroundColor:'yellow'}}/>;
    }
    _itemSeparatorComponent() {
        return (
            <View style={{backgroundColor: "#815", height: 3}}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        height: 30,
        fontSize: 18,
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    header: {
        height: 44,
        fontSize: 22,
        alignSelf: 'center',
        textAlignVertical: 'center'
    }
});