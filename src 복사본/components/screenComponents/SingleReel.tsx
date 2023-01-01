import React, {useRef} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

type Props = {
  item: any;
  index: any;
  currentIndex: any;
};

const SingleReel = ({item, index, currentIndex}: Props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);
  const onBuffer = (buffer: any) => {
    console.log('buffering', buffer);
  };

  const onError = (error: any) => {
    console.log('error', error);
  };

  return (
    <View
      style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.video}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SingleReel;
