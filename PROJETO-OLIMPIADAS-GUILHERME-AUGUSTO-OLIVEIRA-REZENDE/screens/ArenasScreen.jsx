import { StyleSheet, Image, FlatList } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'


const arenas = [
    {
    id: 1,
    nome: "Stade de France",
    cidade: "Saint-Denis",
    capacidade: 80000,
    imagem: "https://i.pinimg.com/236x/28/ae/8e/28ae8e00707d5c93b968ac95eeed29b7.jpg"
    },
    {
    id: 2,
    nome: "Paris La Défense Arena",
    cidade: "Nanterre",
    capacidade: 30000,
    imagem: "https://i.pinimg.com/236x/9d/cf/dd/9dcfdde58e9f70176b7d78d942729277.jpg"
    },
    {
    id: 3,
    nome: "Arena Bercy",
    cidade: "Paris",
    capacidade: 15000,
    imagem: "https://i.pinimg.com/736x/6c/6d/87/6c6d87ebac2c188a6f7bda2e008181f8.jpg"
    },
    {
    id: 4,
    nome: "Stade Pierre-Mauroy",
    cidade: "Lille",
    capacidade: 50000,
    imagem: "https://i.pinimg.com/236x/36/0d/43/360d4366292e0104ad5bb209252b98ab.jpg"
    },
    {
    id: 5,
    nome: "Grand Palais",
    cidade: "Paris",
    capacidade: 8000,
    imagem: "https://i.pinimg.com/236x/be/c0/76/bec076408b146e16bc9bcdf58978405d.jpg"
    }
    ];
export default function ArenasScreen() {
  return (
    <FlatList
      data={arenas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={{ marginBottom: 20 }}>
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>CIDADE: {item.cidade}</Paragraph>
            <Paragraph>CAPACIDADE: {item.capacidade}</Paragraph>
            <Image source={{ uri: item.imagem }} style={{ height: 100, width: 100, alignSelf: 'center', marginVertical: 10 }} />
          </Card.Content>
        </Card>
      )}/>
    
  )
}

const styles = StyleSheet.create({})