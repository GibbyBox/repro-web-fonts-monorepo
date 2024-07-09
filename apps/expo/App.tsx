import { AcmeFonts } from '@acme/fonts';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loaded, error] = useFonts({
    ...AcmeFonts,
  });

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'TwinkleStar', fontSize: 24 }}>Lorem Ipsum</Text>
      <Text style={{ fontSize: 24 }}>Lorem Ipsum</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
