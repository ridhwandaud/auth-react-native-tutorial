import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyCIbH-LzqqFPIaRxJ7u7arNFxUJDfpNEXo',
	    authDomain: 'auth-6f37a.firebaseapp.com',
	    databaseURL: 'https://auth-6f37a.firebaseio.com',
	    projectId: 'auth-6f37a',
	    storageBucket: 'auth-6f37a.appspot.com',
	    messagingSenderId: '504408596142'
	  });
	}

  render() {
    return (
      <View>
      	<Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;