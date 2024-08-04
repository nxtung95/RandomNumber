import { StatusBar } from 'expo-status-bar';
import { Button, LogBox, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [randomNumber, setRandomNumber] = useState('');
  
  useEffect(() => {
    // Code trong useEffect sẽ thực hiện sau mỗi lần render
    // Ignore log notification by message
    console.log('React Use Effect, random number: ' + randomNumber);
  }, [randomNumber]);

  const generateRandomnumber = () => {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNumber + "");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculator App!</Text>
      {/* <StatusBar style="auto" /> */}
      <TouchableOpacity style={styles.button} onPress={generateRandomnumber} >
      <Text style={styles.buttonText}> Random Number test</Text>
      </TouchableOpacity>
      {
        randomNumber.length > 0 && (
          <Text style={styles.randomNumber}>Random number: {randomNumber}</Text>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  randomNumber: {
    fontSize: 12,
    color: "green",
    fontWeight: "bold"
  },
  buttonContainer: {
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
