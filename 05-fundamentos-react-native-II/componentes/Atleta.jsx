import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Atleta(props){
    
    const {nome, idade, numero, imagem} = props


    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Atleta</Text>

            <Text style={styles.texto}>NOME: {nome}</Text>
            <Text style={styles.texto}>IDADE: {idade}</Text>
            <Text style={styles.texto}>NUMERO: {numero}</Text>

            <Image
                source={{
                    uri:imagem
                }}
                style={{
                    height:100,
                    width:200
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 10,
        padding: 5,
        alignItems: 'center'
    },
    texto: {
        fontSize: 20,
        fontWeight: 80,
    }
})