import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>GoNative App</Text>
        <ScrollView >
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
          <Text style={styles.welcome}>
            Welcome to RN Challenge One!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
