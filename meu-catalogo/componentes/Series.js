import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Series(props) {

    const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <View style={styles.container}>

           

            <Text style={styles.texto}>NOME: {nome}</Text>
            <Text style={styles.texto}>ANO: {ano}</Text>
            <Text style={styles.texto}>DIRETOR: {diretor}</Text>
            <Text style={styles.texto}>TEMPORADAS: {temporadas}</Text>

            <Image
                source={{
                    uri: capa
                }}
                style={{
                    height: 100,
                    width: 200
                }}
            />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 5
  },
  texto: {
    fontSize: 20,
    color: '#000'
  }
});