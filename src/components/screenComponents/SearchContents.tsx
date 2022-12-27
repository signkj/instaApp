import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SearchContents = () => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../../storage/images/post1.jpg'),
        require('../../storage/images/post2.jpg'),
        require('../../storage/images/post3.jpg'),
        require('../../storage/images/post4.jpg'),
        require('../../storage/images/post5.jpg'),
        require('../../storage/images/post6.jpg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../storage/images/post7.jpg'),
        require('../../storage/images/post8.jpg'),
        require('../../storage/images/post9.jpg'),
        require('../../storage/images/post10.jpg'),
        require('../../storage/images/post11.jpg'),
        require('../../storage/images/post12.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../storage/images/post13.jpg'),
        require('../../storage/images/post14.jpg'),
        require('../../storage/images/post15.jpg'),
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 261,
                    justifyContent: 'space-between',
                  }}>
                  {data.images.map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity>
                        <Image
                          source={imageData}
                          style={{width: 129, height: 150}}></Image>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity>
                        <Image
                          source={imageData}
                          style={{width: 129, height: 150}}></Image>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity style={{marginLeft: 2}}>
                  <Image
                    source={data.images[5]}
                    style={{width: 129, height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContents;
