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
      <View>
        <TextInput
          multiline
          value={name}
          placeholder='Enter name'
          onChangeText={handleOnClick}
          style={{
            borderColor: 'red',
            borderWidth: 1,
            width: 100,
            padding: 5,
            color: 'white'
          }}
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
