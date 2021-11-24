import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import Button from '../../components/Button'

import Input from '../../components/Input'
import { Container, Title } from './styles'

export default function User() {
  const [name, setName] = useState<string>("")
  const [disable, setDisable] = useState<boolean>(true)
  const navigation = useNavigation()

  function handleNext(){
      if(name !== "") navigation.navigate("Ready", {name: name})
  }

  function onChangeValue(value: string): void{
    if(value !== "") setDisable(false)

    setName(value)
  }

  return (
    <Container>
        <Title>
          Como podemos{`\n`} chamar você?
        </Title>
        <Input placeholder="Digite um nome" value={name} onChangeText={(value) => onChangeValue(value)}/>
        <Button label="Confirmar" width='180px' height="50px" disabled={disable} onPress={() => {handleNext()}}/>
    </Container>
  )
}
