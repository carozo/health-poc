/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Home} from './src/screens/Home';
import {StatusBar} from 'react-native';
import {Palette} from './src/styles/Palette';

export const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Palette.surface_10}
        barStyle={'dark-content'}
      />
      <Home />
    </>
  );
};
