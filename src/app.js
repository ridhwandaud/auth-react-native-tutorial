import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner,Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyCIbH-LzqqFPIaRxJ7u7arNFxUJDfpNEXo',
	    authDomain: 'auth-6f37a.firebaseapp.com',
	    databaseURL: 'https://auth-6f37a.firebaseio.com',
	    projectId: 'auth-6f37a',
	    storageBucket: 'auth-6f37a.appspot.com',
	    messagingSenderId: '504408596142'
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
  	console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return (
        	<Card>
	          <Button onPress={() => firebase.auth().signOut()}>
	            Log Out
	          </Button>
          	</Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
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