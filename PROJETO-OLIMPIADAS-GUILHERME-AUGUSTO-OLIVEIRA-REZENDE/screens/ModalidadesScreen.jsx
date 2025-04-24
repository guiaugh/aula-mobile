import { StyleSheet, Text, Image, FlatList } from 'react-native'
import { Card, Title } from 'react-native-paper'
import React from 'react'

const modalidades = [
  {
    id: 1,
    nome: "Atletismo",
    tipo: "Individual/Coletivo",
    categoria: "Olímpica",
    local: "Stade de France",
    numeroAtletas: 2000,
    imagem: "https://i.pinimg.com/236x/cf/56/1e/cf561eefad5856c8205a34fa9dcd3677.jpg"
  },
  {
    id: 2,
    nome: "Natação",
    tipo: "Individual",
    categoria: "Olímpica",
    local: "Paris La Défense Arena",
    numeroAtletas: 1500,
    imagem: "https://i.pinimg.com/236x/e4/38/30/e4383044d0dcaf6f37a86a6600b00afe.jpg"
  },
  {
    id: 3,
    nome: "Ginástica Artística",
    tipo: "Individual",
    categoria: "Olímpica",
    local: "Arena Bercy",
    numeroAtletas: 500,
    imagem: "https://i.pinimg.com/236x/fd/40/f2/fd40f2ce36d18c4078a64b07f3a60146.jpg"
  },
  {
    id: 4,
    nome: "Vôlei",
    tipo: "Coletivo",
    categoria: "Olímpica",

    local: "Stade Pierre-Mauroy",
    numeroAtletas: 288,
    imagem: "https://i.pinimg.com/236x/fb/ee/45/fbee459fd2cbf029c89bb6a5ed27fbbf.jpg"
  },
  {
    id: 5,
    nome: "Basquete",
    tipo: "Coletivo",
    categoria: "Olímpica",
    local: "Arena Bercy",
    numeroAtletas: 288,
    imagem: "https://i.pinimg.com/236x/2e/a5/f1/2ea5f13671c34288c2c0f1adf04da63f.jpg"
  }
];

export default function ModalidadesScreen() {
  return (
    <FlatList
      data={modalidades}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={{ marginBottom: 20 }}>
          <Card.Content>
            <Title>{item.nome}</Title>
            <Image source={{ uri: item.imagem }} style={{ height: 100, width: 100, alignSelf: 'center', marginVertical: 10 }} />
            <Text>Tipo: {item.tipo}</Text>
            <Text>Categoria: {item.categoria}</Text>
            <Text>Local: {item.local}</Text>
            <Text>Número de Atletas: {item.numeroAtletas}</Text>
          </Card.Content>
        </Card>
      )}  />
      
  )
}

const styles = StyleSheet.create({})