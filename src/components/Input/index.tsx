import React from 'react'
import { TextInputProps } from 'react-native'

import { Container } from './styles'

interface IinputProps extends TextInputProps {} 

export default function Input({...rest}: IinputProps) {
  return (
    <>
    <Container {...rest}/>
    </>
  )
}


