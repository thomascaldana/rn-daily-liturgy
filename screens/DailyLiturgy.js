import React from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import FirstRoute from '../components/DailyLiturgyComponents/FirstRoute';
import SecondRoute from '../components/DailyLiturgyComponents/SecondRoute';
import ThirdRoute from '../components/DailyLiturgyComponents/ThirdRoute';

class TabViewClass extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'leitura', title: 'Leituras' },
      { key: 'salmos', title: 'Salmos' },
      { key: 'evangelho', title: 'Evangelho' },
    ],
  };

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'leitura':
        return <FirstRoute />;
      case 'salmos':
        return <SecondRoute />;
      case 'evangelho':
        return <ThirdRoute />;
      default:
        return null;
    }
  };

  render () {
    return (
      <>
        <StatusBar backgroundColor={'#054d44'} />
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#dee5e4' }}
              style={{ backgroundColor: '#075e54' }}
            />
          )}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </>
    );
  }
}

export default TabViewClass;
