import styled from 'styled-components/native'
import { Fonts, Colors } from '../Themes'

export const Container = styled.View`
  background-color: ${props => props.nonopenable ? Colors.transparent : Colors.snow};
  padding: 20px;
  border-bottom-color: ${Colors.grey};
  border-bottom-width: ${props => props.nonopenable ? '0px' : '1px'};;
`
export const AlignRight = styled.View`
flex-direction: row;
justify-content: flex-end;
`

export const Speaker = styled.Text`
color: ${Colors.charcoal};
font-size: ${Fonts.size.medium};
font-family: ${Fonts.type.base};
padding-top: 5px;
`

export const Row = styled.View`
flex-direction: row;
`

export const Title = styled.Text`
color: black;
font-size: ${Fonts.size.regular};
font-family: ${Fonts.type.base};
`
export const Description = styled.Text`
  color: black;
  font-size: ${Fonts.size.medium};
  font-family: ${Fonts.type.base};
`

export const TalkInfo = styled.View`
flex: 1;
`

// margin-left:  make sure we don't overlap w/ the TalkInfo text
export const ImageContainer = styled.View`
flex-direction: row;
justify-content: flex-end;
margin-left: 15px;
`

export const TimeInfo = styled.View`
background-color: ${props => props.nonopenable ? Colors.transparent : Colors.snow};
flex-direction: row;
align-items: center;
`

export const RoundedImage = styled.Image`
width: 100;
height: 100;
border-radius: 50px;
margin-left: -15px;
`

export const Time = styled.Text`
color: ${Colors.charcoal};
font-size: ${Fonts.size.regular};
font-family: ${Fonts.type.base};
margin-left: 5px;
`
