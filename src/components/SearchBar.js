import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit})=>{
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name='search1'style={styles.iconStyle}/>
      <TextInput
        style={styles.inputStyle}
        placeholder='Search something'
        value={term}
        // onChangeText={newTerm => onTermChange(newTerm)}

        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={onTermChange} //reference
        onEndEditing={onTermSubmit} //ES6

        // onEndEditing={()=>onTermSubmit()} //Initiate search
      />
    </View>);
};

const styles = StyleSheet.create(
  {
    backgroundStyle:
    {
      backgroundColor: 'rgb(235, 235, 235)',
      height: 50,
      borderRadius: 6,
      marginHorizontal: 15,
      marginTop:10,
      marginBottom:10,
      flexDirection: 'row'
    },

    inputStyle:
    {
      flex:1, //alignment related to expanding as much as it can along the axis
      // marginLeft:5,
      fontSize: 24
    },

    iconStyle:
    {
      fontSize: 45,
      alignSelf: 'center',
      marginHorizontal:10
      // marginLeft:10
    }
  }
);

export default SearchBar;
