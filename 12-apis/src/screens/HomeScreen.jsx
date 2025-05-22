import { FlatList, StyleSheet, View } from 'react-native'
import { Card, Avatar, IconButton, ActivityIndicator, MD2Colors, Text } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function HomeScreen({navigation, route}) {

  const [users, setUsers] = useState([])

  useEffect(() => {

    axios.get('https://dummyjson.com/users?delay=2000')
      .then((response) => {
        setUsers(response.data.users)
      })
      .catch((error) => {
        alert('Erro ao comunicar com a API')
      })

  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Card 
          style={{ margin: 5 }}
          onPress={() => navigation.navigate('Usuario', item.id)}>
            <Card.Title
              title={item.firstName + ' ' + item.lastName}
              subtitle={item.email}
              left={props => <Avatar.Image {...props} source={{ uri: item.image }} />}
              right={props => <IconButton {...props} icon="chevron-right" />}
            >

            </Card.Title>
          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />
            <Text variant='titleLarge'>Aguarde...</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 50
  },
  loadingContainer:{
    height: 750,
    alignItems: 'center',
    justifyContent: 'center',
  }
})