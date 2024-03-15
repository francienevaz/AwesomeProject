import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ScrollView } from 'react-native';

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado');
  };

  return (
    <View style={styles.container}>
       <View>
            <Text style={styles.h1}>Hello World React Native</Text>
            <Image
                             source={require('./images/octocatMe.png')}
                             style={styles.image}
                  />
       </View>
      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="O que você quer fazer hoje?"/>
          <CustomButton title="Add Goal" onPress={handlePress} />
      </View>
      <View style={styles.goalsContainer}>
          <Text>List of goals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  h1: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 50,
    width: '80%',
    marginRight: 8,
    padding: 20,
  },
  button: {
    backgroundColor: 'crimson',
    padding: 20,
    margin: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  goalsContainer: {
    flex: 3,
  }
});

export default App;
