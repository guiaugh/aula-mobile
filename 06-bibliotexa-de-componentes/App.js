import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider} from 'react-native-paper'

export default function App() {

  const listaFrutas = ['Uva', 'Maça', 'Laranja', 'Melão']

  return (
    <PaperProvider>
      <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {
          listaFrutas.map(
            item => <Text variant='displayLarge'>{item}</Text>
          )
        }

        {
          listaFrutas.map(
            item => (
              <View>
                <Text variant='displaySmall'>{item}</Text>
                <Divider style={{height: '1'}}/>
              </View>
            )
          )
        }

        <FlatList
          data={listaFrutas}
          renderItem={({item}) => <Text variant='headlineMedium'>{item}</Text>} 
        />

        <FlatList
          data={listaFrutas}
          renderItem={({item}) => (
            <View>
              <Text variant='displaySmall'>{item}</Text>
              <Divider style={{height: 1}}/>
            </View>
          )}
        />

      </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
