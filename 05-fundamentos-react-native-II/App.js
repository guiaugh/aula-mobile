import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Atleta from './componentes/Atleta';

export default function App() {

  const listaAtletas = [
    {
      nome: 'Neymar',
      idade: 33,
      numero: 10,
      imagem: ''
    },
    {
      nome: 'Lebron',
      idade: 33,
      numero: 10,
      imagem: ''
    },


]



return (
  <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />

    {
      listaAtletas.map(
        atleta => {
          return(
            <Atleta
              nome={atleta.nome}
              idade={atleta.idade}
              numero={atleta.numero}
              imagem={atleta.imagem}
            />
          )
        }
      )
    }




    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
