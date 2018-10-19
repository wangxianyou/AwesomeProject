import React, {Component} from 'react'
import {View, StyleSheet, FlatList, Image, Text, ActivityIndicator} from 'react-native'

export default class HelloFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            datas: []
        }
    }

    componentDidMount() {
        return fetch("http://dw2.chinanews.com/chinanews/getNewsList?language=chs&pageIndex=1&pageSize=15&searchType=1&channel=%E5%B1%95%E7%A4%BA&cname=cs&dtp=8")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    datas: this.state.datas.concat(responseJson.data)
                })
            }).catch(e => {
                console.log(e)
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View  style={styles.loading}>
                    {/*<ActivityIndicator/>*/}
                    <Text>loading data...</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.datas}
                    renderItem={({item}) =>
                        <View style={styles.item_container}>
                            <Image source={{uri:item.picture.split("|")[0] === ""?"http://www.chinanews.com/gj/2018/10-15/U410P4T8D8649739F19930DT20181015081026.jpg":item.picture.split("|")[0]}} style={styles.thumb}/>
                            <View style={{flex:1}}>
                                <Text style={styles.item}>{item.title}</Text>
                                <Text style={styles.item}>{item.pubtime}</Text>
                            </View>
                        </View>
                    }
                    keyExtractor={(item,index) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.divider}/>}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#938',
        flexDirection:'row'
    },
    item_container:{
        flex:1,
        backgroundColor:'#938',
        flexDirection:'row',
        padding:15
    },
    item: {
        fontSize:18,
        alignSelf:'center',
        color:'#fff'
    },
    thumb:{
        width:80,
        height:60,
    },
    divider:{
        height:3,
        backgroundColor:'blue'
    },
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});