import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {getImagesAsync} from '../api/pexels';

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [headers, setHeaders] = useState([]);

  const getImages = async () => {
    const {headers, data} = await getImagesAsync();
    // console.log('RESLT', JSON.stringify(headers, null, 4));
    // console.log('RESLT', JSON.stringify(data, null, 4));
    setHeaders(headers);
    setPhotos(data.photos);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <View>
      <View style={style.headerContainer}>
        <Text>x-ratelimit-limit : {headers['x-ratelimit-limit']}</Text>
        <Text>x-ratelimit-remaining : {headers['x-ratelimit-remaining']}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,.25)',
    padding: 5,
    margin: 5
  },
});
