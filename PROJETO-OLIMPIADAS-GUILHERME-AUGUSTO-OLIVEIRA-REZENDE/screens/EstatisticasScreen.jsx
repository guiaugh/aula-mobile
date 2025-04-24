import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import React from 'react'

const estatisticas = {
    totalPaises: 206,
    totalModalidades: 32,
    totalMedalhas: 329,
    atletasFemininos: 5250,
    atletasMasculinos: 5250,
    totalArenas: 18,
    totalVoluntarios: 45000,

    orcamentoTotal: "8.8 bilhões de euros"
};

export default function EstatisticasScreen() {
    return (
        //Exibir os dados estatísticos abaixo das Olimpíadas 2024 utilizando os dados fornecidos (0,3 ponto)
        //   Total de Atletas, Total de Países, Total de Modalidades
        //Criar uma função que calcule a média de medalhas por país e faça exibir o resultado na tela (0,3 ponto)
        //Criar uma função que calcule a média de voluntários por arena e faça exibir o resultado na tela (0,3 ponto)
        //Criar uma função que calcule a média de atletas por modalidade e faça exibir o resultado na tela (0,3 ponto)
        //Utilizar o componente Card e Text do React Native Paper para exibir as informações (0,3 ponto)
        <Card style={{ marginVertical: 5 }}>
            <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Estatísticas das Olimpíadas de Paris 2024</Text>
                    <Text>Total de Países: {estatisticas.totalPaises}</Text>
                    <Text>Total de Modalidades: {estatisticas.totalModalidades}</Text>
                    <Text>Total de Medalhas: {estatisticas.totalMedalhas}</Text>
                    <Text>Total de Atletas Femininos: {estatisticas.atletasFemininos}</Text>
                    <Text>Total de Atletas Masculinos: {estatisticas.atletasMasculinos}</Text>
                    <Text>Total de Arenas: {estatisticas.totalArenas}</Text>
                    <Text>Total de Voluntários: {estatisticas.totalVoluntarios}</Text>
                    <Text>Orçamento Total: {estatisticas.orcamentoTotal}</Text>
                    <Text>Média de Medalhas por País: {((estatisticas.totalMedalhas / estatisticas.totalPaises).toFixed(2))}</Text>
                    <Text>Média de Voluntários por Arena: {((estatisticas.totalVoluntarios / estatisticas.totalArenas).toFixed(2))}</Text>
                    <Text>Média de Atletas por Modalidade: {((estatisticas.atletasFemininos + estatisticas.atletasMasculinos) / estatisticas.totalModalidades).toFixed(2)}</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({})