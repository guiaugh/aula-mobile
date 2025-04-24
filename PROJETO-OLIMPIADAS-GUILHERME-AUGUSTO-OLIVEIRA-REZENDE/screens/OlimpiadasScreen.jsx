import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'


const olimpiadas = {
    nome: "Jogos Olímpicos de Verão de 2024",
    local: "Paris, França",
    dataInicio: "26 de julho de 2024",
    dataFim: "11 de agosto de 2024",
    organizacao: "Comitê Olímpico Internacional",
    imagem: "https://i.pinimg.com/236x/79/27/be/7927bea5c23a8b755bbde5fa8211cd89.jpg",
    edicao: 33,
    mascotes: [
        {
            id: "1",
            nome: "Phryge Olímpico",
            descricao: "Mascote dos Jogos Olímpicos",
            imagem: "https://i.pinimg.com/236x/17/82/f3/1782f3d30b0210d4f36131bf27b6bb4c.jpg"
        },
        {
            id: "2",
            nome: "Phryge Paralímpico",
            descricao: "Mascote dos Jogos Paralímpicos",
            imagem: "https://i.pinimg.com/236x/81/19/d1/8119d1ec0e8a0e30cf426b25c5dc517a.jpg"
        },
    ]
};

export default function OlimpiadasScreen() {
    return (

        <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
            <Image source={{ uri: olimpiadas.imagem }} style={{ height: 200, width: 200, alignSelf: 'center', marginVertical: 10 }} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>{olimpiadas.nome}</Text>
            <Text style={{ fontSize: 18, textAlign: 'center' }}>{olimpiadas.local}</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Início: {olimpiadas.dataInicio}</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Fim: {olimpiadas.dataFim}</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Edição: {olimpiadas.edicao}</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Organização: {olimpiadas.organizacao}</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Mascotes:</Text>
            <FlatList
                data={olimpiadas.mascotes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={{ marginBottom: 20 }}>
                        <Card.Content>
                            <Title>{item.nome}</Title>
                            <Paragraph>{item.descricao}</Paragraph>
                            <Image source={{ uri: item.imagem }} style={{ height: 100, width: 100, alignSelf: 'center', marginVertical: 10 }} />
                        </Card.Content>
                    </Card>
                )} />
        </View>



    )
}

const styles = StyleSheet.create({})