import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const playlists = [
  {
    title: 'aaaaa',
    url: 'https://youtube.com/playlist?list=PL1x2NrnY2NiiNqXUCl0SVusHQkhuKW6JG&feature=shared',
  },
  {
    title: 'aaaaa',
    url: 'https://youtube.com/playlist?list=PL1x2NrnY2NiiNqXUCl0SVusHQkhuKW6JG&feature=shared',
  },
  {
    title: 'aaaaa',
    url: 'https://youtube.com/playlist?list=PL1x2NrnY2NiiNqXUCl0SVusHQkhuKW6JG&feature=shared',
  },
  // Add more playlists here
];

const SecondRoute = () => {
  const [data, setData] = useState(null);

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {playlists.map((playlist, index) => (
          <TouchableOpacity
            key={index}
            style={styles.playlistContainer}
            onPress={() => handlePress(playlist.url)}
          >
            <Text style={styles.playlistTitle}>{playlist.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  playlistContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  playlistTitle: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SecondRoute;
