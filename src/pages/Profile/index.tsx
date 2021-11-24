import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Container, Description, DescriptionContainer, Header, NameRoom, ProfileName, ProfilePicture, Room, RoomsContainer } from './styles'

export default function Profile() {
  const route = useRoute();

  return (
    <Container>
        <Header>
          <ProfileName>Olá,{`\n`}{route.params?.name}</ProfileName>
          <ProfilePicture source={{uri:'https://avatars.githubusercontent.com/u/59885744?s=400&u=8f75c514a7de4ed297cf837a59386885f00d74e3&v=4'+route.params?.name}}/>
        </Header>
        <DescriptionContainer>
          <Description>
            Em qual ambiente{`\n`}
            você quer colocar sua planta?
          </Description>
        </DescriptionContainer>
        <RoomsContainer>
          <Room>
            <NameRoom>
                Sala
            </NameRoom>
          </Room>
          <Room active={true}>
            <NameRoom>
                Quarto
            </NameRoom>
          </Room>
          <Room>
            <NameRoom>
                Cozinha
            </NameRoom>
          </Room>
          <Room>
            <NameRoom>
                Banheiro
            </NameRoom>
          </Room>
        </RoomsContainer>
    </Container>
  )
}
