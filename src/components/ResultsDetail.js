import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ResultsDetail = ({result}) =>{
  return (
    <View style = {styles.container}>
      <Image style = {styles.imageStyles} source={{uri: result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text> 

    </View>
  )

};

const styles = StyleSheet.create({
  imageStyles:{
    width:250,
    height:120,
    justifyContent: 'space-between',
    flexDirection:'row',
    borderRadius:4
  },
  name:{
    fontWeight:'bold',
    marginTop:5

  },
  container:{
    marginLeft:15
  }
});

export default ResultsDetail;
