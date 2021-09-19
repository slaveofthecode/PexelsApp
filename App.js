/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import {Image, StyleSheet, Text} from 'react-native';

import logo from './assets/logo.png';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleOnPressSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerLeft: () => <Image source={logo} style={style.logo} />,
            headerRight: () => (
              <Text
                style={{color: '#fff', fontSize: 16}}
                onPress={handleOnPressSearch}>
                {showSearch ? 'close' : 'search'}
              </Text>
            ),
            title: 'Pexels App',
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,1)',
            },
            headerTintColor: 'rgba(255,255,255,1)',
          }}>
          {props => <HomeScreen {...props} showSearch={showSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            // headerLeft: () => <Image source={logo} style={style.logo} />,
            title: 'Detail Image',
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,1)',
            },
            headerTintColor: 'rgba(255,255,255,1)',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  logo: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    borderRadius: 25,
  },
});
