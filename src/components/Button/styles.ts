import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.TouchableOpacity`
  width: ${({width}: any) => width ? width : '40px'};
  height: ${({height}: any) => height ? height : '40px'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({disabled}: any) => disabled ? colors.green_light : colors.green}
  
`;

export const Label = styled.Text`
  color: #fff;
`;