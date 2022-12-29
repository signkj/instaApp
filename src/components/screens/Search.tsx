/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchBox from '../screenComponents/SearchBox';
import SearchContents from '../screenComponents/SearchContents';

import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContents />
        <TouchableOpacity
          style={{margin: 25, justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign name="pluscircleo" style={{fontSize: 40, opacity: 0.5}} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Search;
