import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {HelloSectionList} from "./HelloSectionListDemo";
import HelloWorldApp from "./HelloWorldApp";

class LogoTitle extends Component {

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={pic}
                    style={{width: 30, height: 30}}
                />
            </View>

        );
    }
}

class HomeScreen extends Component {
    static navigationOptions = {
        // title: 'HomeScreenTitle',
        // headerTitle instead of title
        headerTitle: <LogoTitle/>,
        headerRight: (<Button
            title="Info"
            color="#fff"
            onPress={() => alert('信息')}
        />)
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to detail"
                    onPress={() => this.props.navigation.navigate('Detail', {
                        pId: '参数id',
                        pTitle: '参数title'
                    })}/>
            </View>
        );
    }
}

class DetailsScreen extends Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
        const {param} = navigation.state;
        return ({
            title: param ? navigation.getParam('pTitle', 'hahhaha') : 'hahhahahahahaha',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        })
// title:'DetailsScreenTitle',
    }


    render() {
        const {navigation} = this.props;
        const id = navigation.getParam('pId', '111');
        const title = navigation.getParam('pTitle', '222');
        const {params} = this.props.navigation.state;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Text>接收参数为：{JSON.stringify(params.pId)}和{JSON.stringify(params.pTitle)}</Text>
                <Text>接收参数为：{JSON.stringify(id)}和{JSON.stringify(title)}</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}/>
                <Button
                    title="Go to back"
                    onPress={() => this.props.navigation.goBack()}/>
                <Button
                    title="pop to top"
                    onPress={() => this.props.navigation.popToTop()}/>
                <Button
                    title="update title name"
                    onPress={() => this.props.navigation.setParams({pTitle: 'updated title'})}/>
            </View>
        );
    }
}

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}

const MainStack = createStackNavigator({
        Home: {
            screen: HomeScreen
        },
        Detail: {
            screen: DetailsScreen
        },

    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }

    });

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class App extends Component {
    render() {
        return <RootStack/>;
    }
}