/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getImagesAsync} from '../api/pexels';
import ImageList from '../components/ImageList';
import InputSearch from '../components/InputSearch';

const HomeScreen = ({showSearch}) => {
  const [photos, setPhotos] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  const getImages = async seacrhTerm => {
    const {headers: resHeaders, data} = await getImagesAsync(seacrhTerm);
    // console.log('RESLT', JSON.stringify(headers, null, 4));
    // console.log('RESLT', JSON.stringify(data, null, 4));
    setHeaders(resHeaders);
    setPhotos(data.photos);
    setTotalResult(data.total_results);
  };

  useEffect(() => {
    getImages('programming');
  }, []);

  return (
    <>
      {showSearch && <InputSearch getImages={getImages} />}
      <View style={style.mainContainer}>
        {/* <View style={style.headerContainer}>
          <Text h3>x-ratelimit-limit / remaining</Text>
          <Text h4>
            {headers['x-ratelimit-limit']} / {headers['x-ratelimit-remaining']}
          </Text>
        </View> */}
        <Text style={style.totalResult}>{totalResult} resultados</Text>
        <ImageList photos={photos} />
      </View>
    </>
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
  mainContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    alignItems: 'center',
  },
  totalResult: {
    color: 'rgba(255,255,255,.5)',
    textAlign: 'right',
    width: '100%',
    paddingHorizontal: 15,
  },
});
