import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList'

const ResultsShowScreen = ({navigation})=>{
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  console.log(result);

  const getResult = async (id)=>{
    try{
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    }//error_handling

    catch (e){
      console.log(e.response.data);
    }
  };

  useEffect(()=>{
    getResult(id);
  }, []);

  console.log(result);

  if(!result){
    return null;
  }

  return (
    <View style={{flex:1}}>
      <Text style={styles.headerText}> {result.name}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=>{photo}}
        renderItem={({item}) => {
          return <Image source={{uri:item}} style= {styles.image}/>
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  image:{
    height:200,
    width:300,
    marginVertical:10
  },
  headerText:{
    fontWeight:'bold'
  }
});

export default ResultsShowScreen;
