import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const CustomTextInput = () => {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isBulletsList, setIsBulletsList] = useState(false);
  const [isOrderedList, setIsOrderedList] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0)

  const handleTextChange = (text) => {
    setText(text);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const toggleBulletsList = () => {
    setText(text + '\n• ');
    setIsBulletsList(true);

  };

  const toggleOrderedList = () => {
    const number = orderNumber+1
    setText(text + `\n${number}. `);
    setIsOrderedList(true);
    setOrderNumber(number)
  };

  return (
    <View>
      <View style={styles.formInputGroup}>

      <TextInput
        style={[{
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecorationLine: isUnderline ? 'underline' : 'none',
        },styles.formInputText]}
        placeholder='Message here'
        placeholderTextColor='#a9a9a9'
        multiline={true}
        onChangeText={handleTextChange}
        value={text}
      />
      </View>
      <View style={styles.textEditorBottom}>
        <TouchableOpacity onPress={toggleBold}>
          <Text>B</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleItalic}>
          <Text>I</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleUnderline}>
          <Text>U</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleBulletsList}>
          <Text>•</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleOrderedList}>
          <Text>1.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({

    textEditorBottom:{
        width:300,
        position:'absolute',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#E3E4E5',
        paddingHorizontal: 12,
        paddingRight: 24,
        bottom:0,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        
      },
      formInputGroup: {
        width:300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        height:50,
        paddingHorizontal:10,
          },
          formInputText: {
            flex: 1,
            fontSize: 15,
            color: '#000',
            paddingLeft: 5,
            paddingRight: 20,
          },
})