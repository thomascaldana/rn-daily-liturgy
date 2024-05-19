import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';

const Products = () => {
  const [loading, setLoading] = useState(true);

  const renderLoadingView = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <RNWebView // Use o novo nome aqui
        source={{ uri: 'https://loja.cancaonova.com/artigos-religiosos' }}
        style={{ flex: 1 }}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
      {loading && renderLoadingView()}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default Products;
