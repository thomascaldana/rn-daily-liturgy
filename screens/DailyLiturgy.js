import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import YoutubeIframePlayer from 'react-native-youtube-iframe-player';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <Text>Leituras e Salmos</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <Text>Evangelho do dia</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <YoutubeIframePlayer
      videoUrl='https://www.youtube.com/watch?v=f7OPcDX_LyI&t=3s'
      height={210}
      width='90%'
      locale='km'
      durationFontSize={15}
    />
  </View>
);
/* const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <Text>Evangelho do dia</Text>
  </View>
); */

/* export default function DailyLiturgy ({ navigation }) {



  return (
    <View style={styles.container}>
      <Text>Daily Liturgy page</Text>
      <TabViewExample />
    </View>
  );
} */






export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'leituraSalmos', title: 'Leituras e Salmos' },
      { key: 'status', title: 'Evangelho' },
      { key: 'evangelho', title: 'Homilía' },
    ],
  };

  render () {
    return (
      <>
        <StatusBar backgroundColor={'#054d44'} />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            leituraSalmos: FirstRoute,
            status: SecondRoute,
            evangelho: ThirdRoute,
          })}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#dee5e4' }}
              style={{ backgroundColor: '#075e54' }}
            />
          }
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </>
    );
  }
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  youtube: {
    alignSelf: 'stretch',
    height: 300,
  },

});