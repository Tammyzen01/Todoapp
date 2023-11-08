import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR } from '../../../theme';
import { navigate } from '../../../utilities';

export default class extends React.Component {
    constructor(props) {
    super(props);
    // this.state = {
    //   rating: '2.5',
    // };
  }
  render(){
    const item = this.props.item;
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigate('ViewData',{data:item})}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </TouchableOpacity>
      );
  }
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#29242a',
      padding: 16,
      borderRadius: 8,
      margin: 8,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      elevation: 2,
      width:'46%',
      
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
      color:COLOR.DEFAULT
    },
    content: {
      fontSize: 15,
      color:COLOR.DEFAULT
    },
  });
