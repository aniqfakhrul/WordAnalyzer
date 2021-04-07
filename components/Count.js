import React, { Component } from 'react';
import { StyleSheet,View,TextInput,Text,TouchableOpacity } from 'react-native';

class Count extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            text : '',
            conso: 0,
            vowels: 0,
            chars : 0,

        }

        this.analyze = () => {
            //init vowels and consonants
            let vowels = /[aeiou]/gi;
            let conso = /[bcdfgjklmnpqstvxzhrwy]/gi;
            let str=this.state.text;

            //split by spaces
            var res = str.split("");

            var total_vowels = 0;
            var total_conso = 0;
            var total_char = 0;
            for (let test of res){

              //specify whether its consonants or vowels
              if (test.match(vowels)){
                total_vowels++;
              }
              else if (test.match(conso)){
                total_conso++;
              }

              //get total chars
              if (test != ' '){total_char += test.length;}

            }

            this.setState({chars: total_char})
            this.setState({vowels: total_vowels})
            this.setState({conso: total_conso})

            console.log("Total vowels: ",total_vowels);
            console.log("Total consonants: ",total_conso);
            console.log("Total character: ",total_char);
        }
    }
 
    render(){
      let count = 0,
      length = this.state.value?this.state.value.length:0;
      return(
        <View>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            />
            <TouchableOpacity style={styles.button} onPress={this.analyze}>
                <Text>Analyze</Text>
            </TouchableOpacity>
            <View style={styles.countContainer}>
                <Text>Word: {this.state.text}</Text>
                <Text>No of Consonants: {this.state.conso}</Text>
                <Text>No of Vowels: {this.state.vowels}</Text>
                <Text>No of Characters: {this.state.chars}</Text>
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginTop:10,
    },
    countContainer: {
      marginTop: 10,
    },
  });

  export default Count;