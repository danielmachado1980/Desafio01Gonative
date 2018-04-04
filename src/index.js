import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Post from './components/Post';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>GoNative App</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
          <Post>GoNative App</Post>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    backgroundColor: '#FFFFee',
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: (Platform.OS === 'ios') ? 64 : 54,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  scroll: {
    backgroundColor: '#EE7777',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});
