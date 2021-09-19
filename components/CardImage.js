import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CardImage = ({image}) => {
  const navigation = useNavigation();

  const handleOnPressImage = () => {
    navigation.navigate('ImageScreen', {image});
  };

  return (
    <TouchableOpacity style={style.containerImage} onPress={handleOnPressImage}>
      <Image
        source={{
          uri:
            image.src.tiny ??
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png',
        }}
        style={style.image}
      />
    </TouchableOpacity>
  );
};

export default CardImage;

const style = StyleSheet.create({
  containerImage: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '48.5%',
    margin: 3,
    borderWidth: 0,
  },
  image: {
    borderRadius: 10,
    height: 180,
    width: '100%',
  },
});
