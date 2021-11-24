
import React,{useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../../components/Button'

import { Container, Title } from '../User/styles'
import {Description} from "./styles"

export default function Ready() {
  const navigation = useNavigation()
  const route = useRoute();
 

  useEffect(() => {console.log(route)},[])
  function handleNext(){
    navigation.navigate("Profile", route.params)
  }

  return (
    <Container>
        <Title>
         Prontinho
        </Title>
        <Description>Agora vamos começar a cuidar das suas{`\n`} plantinhas com muito cuidado.</Description>
        <Button label="Começar" width="180px" height="50px" onPress={() => {handleNext()}}/>
    </Container>
  )
}
