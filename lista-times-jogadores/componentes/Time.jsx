import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Image, FlatList } from 'react-native';
import Jogador from './Jogador';

export default function Time ({ nome, anoFundacao, mascote, imagem, jogadores }) {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Content>
        <Title>{nome}</Title>
        <Paragraph>ANO DE FUNDAÇÃO: {anoFundacao}</Paragraph>
        <Paragraph>MASCOTE: {mascote}</Paragraph>
        <Image source={{ uri: imagem }} style={{ height: 100, width: 100, alignSelf: 'center', marginVertical: 10 }} />
      </Card.Content>
      <Card.Content>
        <FlatList
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => <Jogador {...item} />}
        />
      </Card.Content>
    </Card>
  );
};


