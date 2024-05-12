import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const playlists = [
  {
    title: 'Relacionamentos: casamento, namoro e amizades',
    url: 'https://youtube.com/playlist?list=PL1x2NrnY2NiiNqXUCl0SVusHQkhuKW6JG&feature=shared',
  },
  {
    title: 'Motivação',
    url: 'https://youtube.com/playlist?list=PLYyvwpW8tEiXNDlsWpAxRkcw_dJF5Fbzo&feature=shared',
  },
  {
    title: 'Família',
    url: 'https://youtube.com/playlist?list=PL1x2NrnY2Nih_iwTF1sDf0cjjA_iTPIQ3&feature=shared',
  },
  {
    title: 'Diversos',
    url: 'https://youtube.com/playlist?list=PL1x2NrnY2NiibV_QetWf4K31gFA7KyqBw&feature=shared',
  },
  // Add more playlists here
];

const FirstRoute = () => {
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

export default FirstRoute;
