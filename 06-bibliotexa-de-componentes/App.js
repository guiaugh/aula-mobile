import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider} from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button mode='contained' onPress={() => {alert('Clicou')}}>Clicar</Button>
        <Button mode='contained-tonal'>Clicar</Button>
        <Button mode='elevated'>Clicar</Button>
        <Button mode='outlined'>Clicar</Button>
        <Button mode='text'>Clicar</Button>

        <Text>Um texto qualquer</Text>
        <Divider style={{width: '90%'}}/>
        <Text variant='bodyLarge'>Um texto qualquer</Text>
        <Divider style={{width: '90%'}}/>
        <Text variant='displayLarge'>Um texto qualquer</Text>
        <Divider style={{width: '90%'}}/>
        <Text variant='headlineLarge'>Um texto qualquer</Text>
        <Divider style={{width: '90%'}}/>
        <Text variant='labelLarge'>Um texto qualquer</Text>
        <Divider style={{width: '90%'}}/>
        <Text variant='titleLarge'>Um texto qualquer</Text>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Um titulo qualquer!</Title>
            <Paragraph>Aqui é um texto em paragrado! Aqui é um texto em paragrado!
              Aqui é um texto em paragrado! Aqui é um texto em paragrado!
              Aqui é um texto em paragrado!</Paragraph>
          </Card.Content>
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Um titulo qualquer!</Title>
            <Paragraph>Aqui é um texto em paragrado! Aqui é um texto em paragrado!
              Aqui é um texto em paragrado! Aqui é um texto em paragrado!
              Aqui é um texto em paragrado!</Paragraph>
          </Card.Content>
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Um titulo qualquer!</Title>
            <Paragraph>Aqui é um texto em paragrado! Aqui é um texto em paragrado!
              Aqui é um texto em paragrado! Aqui é um texto em paragrado!
              Aqui é um texto em paragrado!</Paragraph>
          </Card.Content>
        </Card>
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
