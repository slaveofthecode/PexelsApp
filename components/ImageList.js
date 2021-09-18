import React from 'react';
import {View, FlatList} from 'react-native';
import CardImage from './CardImage';

const ImageList = ({photos}) => {
  const renderItem = ({item}) => {
    return <CardImage image={item} />;
  };

  return (
    <View>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ImageList;
