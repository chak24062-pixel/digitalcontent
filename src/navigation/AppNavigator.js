
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppNavigator() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>mosaic</Text>
      <Text>アプリを準備しています</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
