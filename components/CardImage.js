import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const CardImage = ({image}) => {
  return (
    <View style={style.containerImage}>
      <Image
        source={{
          uri:
            image.src.tiny ??
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png',
        }}
        style={style.image}
      />
    </View>
  );
};

export default CardImage;

const style = StyleSheet.create({
  containerImage: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '48%',
    margin: 2.5,
    borderWidth: 0,
  },
  image: {
    borderRadius: 10,
    height: 180,
    width: '100%',
  },
});
