import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Text, Card, Avatar } from 'react-native-paper'


export default function UsuarioScreen({ navigation, route }) {

  const idUser = route.params
  const [user, setUsers] = useState({})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/users/' + idUser)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        alert('Erro ao comunicar com a API')
      })

    axios.get('https://dummyjson.com/users/' + idUser + '/posts')
      .then((response) => {
        setPosts(response.data.posts)
      })
      .catch((error) => {
        alert('Erro ao comunicar com a API')
      })
  }, [])

  return (
    <View>
      <Card>
        <Card.Title
          title={user.firstName + ' ' + user.lastName}
          subtitle={user.email}
          left={props => <Avatar.Image {...props} source={{ uri: user.image }} />}
        />
        <Card.Content>
          <Text variant='titleMedium'>Dados do usuario: </Text>
          <Text>Username: {user.username}</Text>
          <Text>Universidade: {user.university}</Text>
          <Text>Idade: {user.age}</Text>
          <Text>Telefone: {user.phone}</Text>
          <Text>Endereço: {user.address?.address}, {user.address?.city}, {user.address?.state}</Text>
          <Card.Cover source={{ uri: user.image }} />
          <Text> </Text>
          <Text variant='titleMedium'>Posts do usuario: </Text>
          {posts.map(post => (
            <View>
              <Text variant='titleMedium'>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          ))}
        </Card.Content>


      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})