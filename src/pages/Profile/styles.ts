import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const Container = styled.View`
  flex:1;
  background-color: #fff;
  padding: 10px;
`;

export const Header = styled.View`
  height: 200px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const ProfileName = styled.Text`
  font-size: 26px;

`;

export const DescriptionContainer = styled.View``;
export const Description = styled.Text``;


export const RoomsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const Room = styled.View`
  padding: 5px;
  background-color: ${({active}:any) => active ? colors.green_light : colors.gray };
  border-radius: 6px;
`;

export const NameRoom = styled.Text``;
