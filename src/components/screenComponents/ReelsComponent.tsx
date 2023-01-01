import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from './DataBase';
import SingleReel from './SingleReel';

type Props = {
  index: number;
};

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndexValue = ({index}: Props) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={({item, index}) => index}
    />
  );
};
export default ReelsComponent;
