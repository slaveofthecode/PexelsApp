import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

const InputSearch = ({getImages}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleOnPressSearch = async () => {
    await getImages(searchTerm);
  };

  const handleOnChageTextSearch = value => {
    setSearchTerm(value);
  };

  return (
    <View style={style.containerSearch}>
      <Input
        placeholder="searching a term..."
        inputContainerStyle={style.inputSearch}
        inputStyle={style.input}
        leftIcon={{type: 'font-awesome', name: 'search', color: '#fff'}}
        leftIconContainerStyle={style.iconSearch}
        onChangeText={handleOnChageTextSearch}
      />
      <Button
        title="search"
        buttonStyle={style.buttonSearch}
        icon={{
          name: 'search',
          size: 20,
          color: 'white',
        }}
        onPress={handleOnPressSearch}
      />
    </View>
  );
};

export default InputSearch;

const style = StyleSheet.create({
  containerSearch: {
    backgroundColor: '#000',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 90,
    alignItems: 'center',
  },
  iconSearch: {
    paddingStart: 10,
    marginRight: 5,
  },
  inputSearch: {
    backgroundColor: '#2C292C',
    borderBottomWidth: 0,
  },
  input: {
    color: '#fff',
    textDecorationLine: 'none',
  },
  buttonSearch: {
    backgroundColor: 'rgb(5, 160, 129)',
    marginBottom: 25,
  },
});
