import React from 'react';
import { Provider } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import Time from './componentes/Time';

const times = [
  {
    nome: "Flamengo",
    anoFundacao: 1895,
    mascote: "Urubu",
    imagem: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    jogadores: [
      { nome: "Gabriel Barbosa", numero: 9, imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg" },
      { nome: "Arrascaeta", numero: 14, imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg" }
    ],
  },
  {
    nome: "Palmeiras",
    anoFundacao: 1914,
    mascote: "Porco",
    imagem: "https://i.pinimg.com/236x/d7/e3/66/d7e36650f858c03c2366721ba3d01ce3.jpg",
    jogadores: [
      { nome: "Dudu", numero: 7, imagem: "https://i.pinimg.com/474x/72/96/9b/72969b2d84fb0ab80f31b571267f142f.jpg" },
      { nome: "Rony", numero: 10, imagem: "https://i.pinimg.com/236x/c9/3d/82/c93d82c6592ece32d02c4b7b8d10806f.jpg" }
    ],
  }
];


export default function App() {
  return (
    <Provider>
      <View style={{ flex: 1, padding: 20, paddingTop:50 }}>
        <FlatList
          data={times}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => <Time {...item} />}
        />
      </View>
    </Provider>
  );
}


