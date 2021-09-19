import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageScreen = ({route}) => {
  const {image} = route.params;

  return (
    <View>
      <Image
        source={{
          uri: image.src.medium,
          height: '75%',
          width: '100%',
        }}
      />
    </View>
  );
};

export default ImageScreen;

const style = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
});
