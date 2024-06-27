import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorScreen({ error }) {
  return (
    <View style={styles.container}>
      <Text>Error loading config: {error.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
