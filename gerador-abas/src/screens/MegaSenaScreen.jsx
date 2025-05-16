import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';

const MegaSenaScreen = () => {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarJogoMegaSena(){
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    setJogosMegaSena([...jogosMegaSena, numeros.sort((a, b) => a - b)]);
  };

  return (
    <View style={styles.container}>
      <Button title="Gerar Jogo da Mega Sena" onPress={gerarJogoMegaSena} />
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.jogo}>{item.join(' - ')}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  jogo: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default MegaSenaScreen;