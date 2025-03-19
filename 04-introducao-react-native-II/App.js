import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

  const nome = 'Guilherme'

  function alerta() {
    alert('Apertou Aqui')
  }

  return (

    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={{ fontSize: 40 }}>Meu texto</Text>
        <Text style={{ fontSize: 40 }}>{nome}</Text>

        <Text style={styles.textoGrande}>Open up App.js to start working on your app!</Text>
        <Button title='Enviar' onPress={alerta}></Button>

        <Image
          source={require('./images/image.png')}
          style={{
            height: 400,
            width: 400
          }}
        />


      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});
