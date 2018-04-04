import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Post = (props) => (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Post1</Text>
        <Text style={styles.textAuthor}>Post2</Text>
      </View>
      <Text style={styles.textContent}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos</Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  textTitle: {
    fontSize: 20,
    color: '#333333',
  },
  textAuthor: {
    fontSize: 10,
    color: '#999999',
  },
  textContent: {
    fontSize: 10,
    color: '#666666',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  }
})

export default Post;
