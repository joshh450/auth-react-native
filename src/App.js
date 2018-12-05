import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyDp63M8RfG6p-j_e9eEpeQydm6F7uqzoPA",
                authDomain: "auth-398e0.firebaseapp.com",
                databaseURL: "https://auth-398e0.firebaseio.com",
                projectId: "auth-398e0",
                storageBucket: "auth-398e0.appspot.com",
                messagingSenderId: "1018047001624"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                <CardSection>
                    <Spinner size="large" />
                </CardSection>
                );
        }
        
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
