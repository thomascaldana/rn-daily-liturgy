import React from 'react';
import { WebView } from 'react-native-webview';

const Helpus = () => {
  return (
    <WebView
      source={{ uri: 'https://secure.cancaonova.com/da/' }}
      style={{ flex: 1 }}
    />
  );
};

export default Helpus;
