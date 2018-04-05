import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Post = ({post}) => (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.textTitle}>{post.title}</Text>
        <Text style={styles.textAuthor}>{post.author}</Text>
      </View>
      <Text style={styles.textContent}>{post.content}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
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
<<<<<<< HEAD
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
=======
    marginTop: 10,
>>>>>>> 6dfc10c065c8a4080d8ea2de7fbdbf73772765a8
  }
})

export default Post;
