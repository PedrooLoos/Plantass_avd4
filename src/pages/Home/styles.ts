import styled from 'styled-components/native';

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${colors.heading};
  text-align: center;
  font-weight: bold;
`;

export const Header = styled.View`
  height: 200px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
`;

export const DescriptionContainer = styled.View`
margin-top: 20px;
margin-bottom: 40px;
`;

export const Description = styled.Text`
  text-align: center;
`;