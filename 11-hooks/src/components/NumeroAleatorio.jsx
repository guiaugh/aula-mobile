import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Text, Card, Button } from 'react-native-paper'

export default function NUmeroAleatorio() {

    const [numeroAleatorio, setNumeroAleatorio] = useState(0)
    const listaNumeros = []

    function gerarNumero() {
        const numeroGerado = Math.round(Math.random() * 101)
        setNumeroAleatorio(numeroGerado)
        console.log(numeroGerado)
    }

    return (
        <View>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Card.Title title="Componente Número Aleatório" />
                    <Text variant='displayMedium'>Número: {numeroAleatorio}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button icon='refresh' onPress={gerarNumero}>Gerar Novo Número</Button>
                </Card.Actions>
                <Card.Content>
                    <Text variant='displaySmall'>Lista de Números: {listaNumeros}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({})