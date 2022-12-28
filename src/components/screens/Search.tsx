/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SearchBox from '../screenComponents/SearchBox';
import SearchContents from '../screenComponents/SearchContents';

//test
const Search = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView>
        <SearchBox />
        <SearchContents />
      </ScrollView>
    </View>
  );
};

export default Search;
