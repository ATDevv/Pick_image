import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function Index() {

  const [name, setName] = useState<string>('')

  const handleOnClick = (e: any): void => {
    setName(e.target.value)
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={name}
          placeholder='Enter name'
          onChange={handleOnClick}
          style={styles.text}
        />
      </View>
      <Text style={styles.text}>Home screen of {name}</Text>
      <Link href="/about" style={{ ...styles.button, textDecorationLine: 'none', borderWidth: 3, borderColor: 'yellow' }}>
        Go to About screen
      </Link>
      <View>
        <Button
          title='Increase'
          onPress={() => {
            alert('me')
          }} />
      </View>
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
