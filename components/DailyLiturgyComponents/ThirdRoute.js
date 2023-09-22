import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import YoutubeIframePlayer from 'react-native-youtube-iframe-player';

const ThirdRoute = () => {
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    setPlaying(!playing);
  };

  return (
    <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
      <TouchableOpacity onPress={toggleVideo}>
        {playing ? (
          <YoutubeIframePlayer
            videoUrl='https://www.youtube.com/watch?v=ymuHNEBDMVo'
            height={210}
            width='90%'
            locale='km'
            durationFontSize={15}
            play={playing}
          />
        ) : (
          <Text>Click to Play</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    textAlign: 'center'
  },
});

export default ThirdRoute;