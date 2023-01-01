/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {StoryInfo} from '../../constrant/originData';
import {useNavigation} from '@react-navigation/native';
import {StatusNavigationProps} from '../../navigator/navigator.type';

interface statusData {
  name: string;
  image: string;
}

const Stories = () => {
  const navigation = useNavigation<StatusNavigationProps>();

  const goStatus = (data: statusData) => {
    navigation.push('Status', {
      name: data.name,
      image: data.image,
    });
  };

  const DrawPlusIcon = ({origin}: any) => {
    return origin.map((data: any, index: React.Key | null | undefined) => {
      return (
        <TouchableOpacity key={index} onPress={() => goStatus(data)}>
          <View
            style={{
              flexDirection: 'column',
              paddingHorizontal: 8,
              position: 'relative',
            }}>
            {data.id === 1 ? (
              <View
                style={{
                  position: 'absolute',
                  bottom: 15,
                  right: 10,
                  zIndex: 1,
                }}>
                <Entypo
                  name="circle-with-plus"
                  style={{
                    fontSize: 20,
                    color: '#405de6',
                    backgroundColor: 'white',
                    borderRadius: 100,
                  }}
                />
              </View>
            ) : null}
            <View
              style={{
                width: 68,
                height: 68,
                backgroundColor: 'white',
                borderWidth: 1.8,
                borderRadius: 100,
                borderColor: '#c13584',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.image}
                style={{
                  resizeMode: 'cover',
                  width: '92%',
                  height: '92%',
                  borderRadius: 100,
                  backgroundColor: 'orange',
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                opacity: data.id === 0 ? 1 : 0.5,
              }}>
              {data.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      <DrawPlusIcon origin={StoryInfo} />
    </ScrollView>
  );
};

export default Stories;
