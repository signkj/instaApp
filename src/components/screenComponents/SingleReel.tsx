import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';

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

  const [mute, setMute] = useState(false);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
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
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}></Ionic>
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 80,
          padding: 10,
        }}>
        <View>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={item.postProfile}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SingleReel;
