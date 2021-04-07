import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Count from './components/Count';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A Word Analyzer</Text>
      <Count/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:20,
  }
});
