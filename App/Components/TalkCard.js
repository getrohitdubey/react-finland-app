import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'

import {Container, AlignRight, Speaker, Row, Title, TalkInfo, ImageContainer, TimeInfo, RoundedImage, Time} from './CardCommon'

import { Metrics, Colors } from '../Themes'
import {scaleOnPress} from './ScaleOnPress'

const makeSpeakersText = (speakers) =>
  speakers && speakers.length > 0 ? speakers.map(a => a.name).join('\n') : ''

const getImage = (speakers) => (
  speakers && speakers.length > 0
    ? speakers.map(speaker => <RoundedImage key={speaker.name} source={{uri: `https://api.react-finland.fi/graphql-2018/images/${speaker.image}`}} />)
    : null
)

const StyledContainer = Animatable.createAnimatableComponent(Container)

class TalkCard extends React.Component {
  render () {
    const { item, onPress, onPressIn, onPressOut } = this.props
    const { session, begin, end } = this.props
    const { speakers = [], title = '' } = session
    if (title.toLowerCase().indexOf('breakfast') > -1) {
      return <View />
    }
    if (title.toLowerCase().indexOf('lunch') > -1) {
      return <View />
    }
    if (title.toLowerCase().indexOf('coffee break') > -1) {
      return <View />
    }
    const image = getImage(speakers)
    return (
      <TouchableWithoutFeedback onPress={() => onPress()} onPressIn={() => onPressIn(this.container)} onPressOut={() => onPressOut(this.container)}>
        <StyledContainer ref={ref => { this.container = ref }}>
          <Row>
            <TalkInfo>
              <Title>{ title || 'To be announced' }</Title>
            </TalkInfo>
            { image ? <ImageContainer>{ image }</ImageContainer> : null }
          </Row>
          <AlignRight>
            <Speaker>{ makeSpeakersText(speakers) }</Speaker>
          </AlignRight>
          <TimeInfo>
            <Icon name='clock-o' size={Metrics.icons.tiny} color={Colors.charcoal} />
            <Time>{ begin } - { end }</Time>
          </TimeInfo>
        </StyledContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default scaleOnPress()(TalkCard)
