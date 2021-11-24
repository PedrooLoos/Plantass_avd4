import React from 'react'
import { TouchableOpacityProps, Text } from 'react-native'
import { Container, Label } from './styles'


interface ButtonProps extends TouchableOpacityProps{
  label: string;

}

export default function Button({label, disabled,...rest}: ButtonProps) {
  return (
    <Container {...rest} disabled={disabled}>
        <Label>
          {label}
        </Label>
    </Container>
  )
}
