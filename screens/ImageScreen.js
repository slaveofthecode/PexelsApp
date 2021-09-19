/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

const ImageScreen = ({route}) => {
  const {image} = route.params;

  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <Card containerStyle={style.containerCard}>
        <Card.Title style={{color: '#fff', textTransform: 'capitalize'}}>
          {image.photographer}
        </Card.Title>
        <View>
          <Image
            source={{
              uri: image.src.medium,
              height: 350,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: '100%',
              backgroundColor: 'rgba(0,0,0,.75)',
              color: '#fff',
              padding: 15,
            }}>
            {image.id}
          </Text>
        </View>
        <Card.Divider width={1} style={{marginVertical: 15}} />
        <Button
          icon={<Icon name="download" type="font-awesome" color="#ffffff" />}
          title="download"
          buttonStyle={{backgroundColor: 'rgb(5, 160, 129)'}}
        />
      </Card>
    </View>
  );
};

export default ImageScreen;

const style = StyleSheet.create({
  containerCard: {
    height: '82%',
    backgroundColor: '#2C292C',
    borderWidth: 0,
  },
});
