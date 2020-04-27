import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchAPI = async (searchTerm) => {
    console.log('Hi there!');
    try {const response = await yelp.get('/search', {
      params: {
        limit:50, // give fifty search results for api call
        term: searchTerm, // term to search
        location: 'san jose' // location to search for
      }
    });
    setResults(response.data.businesses);
    }

    catch (err) {
      setError('Something went Wrong..');
    }
  };
  //BAD code
  // searchAPI('fish')
  //causes rendering infinite loop
  useEffect(()=>{
    searchAPI('pasta')
  }, [])

  return [searchAPI, results, error]
};
