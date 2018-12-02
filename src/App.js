import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyDp63M8RfG6p-j_e9eEpeQydm6F7uqzoPA",
                authDomain: "auth-398e0.firebaseapp.com",
                databaseURL: "https://auth-398e0.firebaseio.com",
                projectId: "auth-398e0",
                storageBucket: "auth-398e0.appspot.com",
                messagingSenderId: "1018047001624"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm/>
            </View>
        );
    }
}

export default App;
