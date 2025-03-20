import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {

  function alerta() {
    alert("GOL Do VASCO ***Só aqui mesmo***!!!");

  }
  return (

    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Vasco Da Gama</Text>
        <Image
          source={require("./images/coutinho.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.textoImage}>Coutinho</Text>

        <Image
          source={require("./images/jardim.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.textoImage}>Leo Jardim</Text>

        <Image
          source={require("./images/payet.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.textoImage}>Payet</Text>

        <Image
          source={require("./images/pirata.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.textoImage}>Veggeti El Pirata</Text>

        <Image
          source={require("./images/tchetche.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.textoImage}>Tche Tche</Text>

        <Button title="GOL" onPress={alerta} />
        <StatusBar style="auto" />
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
    paddingTop: 50,
    paddingBottom: 50,
  },
  textoImage: {
    fontSize: 20,
    padding: 10,
  }
});
