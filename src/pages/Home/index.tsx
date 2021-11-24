import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { Image } from 'react-native';

import Button from '../../components/Button';
import { Container, Header, Title, Content, DescriptionContainer, Description } from './styles'

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <Title>
          Gerencie{`\n`}suas plantas de{`\n`} forma fácil
        </Title>
       </Header>
       <Content>
              <Image source={require('../../assets/watering.png')}/>
       </Content>
       <DescriptionContainer>
        <Description>
          Não esqueça mais de regar suas{`\n`} plantas. Nós cuídamos de lembrar você {`\n`}sempre que precisar.
        </Description>
       </DescriptionContainer>
       <Button label=">" onPress={() => {navigation.navigate("Whois")}}/>
    </Container>
  )
}

