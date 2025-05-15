import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Text, Card, Button } from 'react-native-paper'

export default function Volume() {

    const [volume, setVolume] = useState(0)

    function diminuir() {
        if (volume > 0) {
            setVolume(volume - 1)
        }
    }

    function aumentar() {
        setVolume(volume + 1)
    }

    return (
        <View>
            <Card style={{ margin: 10 }}>
                <Card.Content>

                    <Card.Title title="Componente Volume" />
                    <Text variant='displayMedium'>Volume: {volume}</Text>

                </Card.Content>
                <Card.Actions>

                    <Button icon='minus' onPress={diminuir}>Diminuir</Button>

                    <Button icon='plus' onPress={aumentar}>Aumentar</Button>

                </Card.Actions>
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({})