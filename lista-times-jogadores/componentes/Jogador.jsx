import React from 'react';
import { Card, Title } from 'react-native-paper';
import { View, Text, Image } from 'react-native';

export default function Jogador ({ nome, numero, imagem }) {
  return (
    <Card style={{ marginVertical: 5 }}>
      <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image size={50} source={{ uri: imagem }} />
        <View style={{ marginLeft: 10 }}>
          <Title>{nome}</Title>
          <Text>NÚMERO: {numero}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};


