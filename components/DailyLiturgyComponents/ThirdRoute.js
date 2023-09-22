import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ThirdRoute = () => {
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    setPlaying(!playing);
  };

  return (
    <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
      <TouchableOpacity onPress={toggleVideo}>

        <Text>Click to Play</Text>

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