import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function Index() {

  const [name, setName] = useState<string>('')

  const handleOnClick = (value: any): void => {
    setName(value)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={{ ...styles.button }}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 55,
  },
  text: {
    color: '#fff',
    marginBottom: 15
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginBottom: 15

  },
});
