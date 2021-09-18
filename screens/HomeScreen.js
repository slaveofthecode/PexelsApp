import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

import {getImagesAsync} from '../api/pexels';
import ImageList from '../components/ImageList';

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [headers, setHeaders] = useState([]);

  const getImages = async () => {
    const {headers: resHeaders, data} = await getImagesAsync();
    // console.log('RESLT', JSON.stringify(headers, null, 4));
    // console.log('RESLT', JSON.stringify(data, null, 4));
    setHeaders(resHeaders);
    setPhotos(data.photos);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <View>
      <View style={style.headerContainer}>
        <Text h3>x-ratelimit-limit / remaining</Text>
        <Text h4>
          {headers['x-ratelimit-limit']} / {headers['x-ratelimit-remaining']}
        </Text>
      </View>
      <ImageList photos={photos} />
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
    margin: 5,
  },
});
