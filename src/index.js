import React, { Component } from 'react';//
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      { id: 1, title: 'Título 1', author: 'Daniel G. Machado', content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos.'},
      { id: 2, title: 'Título 2', author: 'Daniel G. Machado', content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos.'},
      { id: 3, title: 'Título 3', author: 'Daniel G. Machado', content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos.'},
    ],
  };

  componentDidMount(){
    console.tron.log('Testando debug... Reactotron de novo!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>GoNative App</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.paddingRound}>
            { this.state.posts.map (post => <Post key={post.id} post={post} ></Post> )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  paddingRound: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textHeader: {
    fontSize: 20,
    color: '#333333',
  }
});
