import React, { Component } from 'react'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'

class RadioButtonGroup extends Component {

  state = {}

  onPress = (value) => {
    const stateKeys = Object.keys(this.state)

    stateKeys.forEach((key) => {
      if (key !== value) this.setState({ [key] : false })
    })

    this.setState({ [value]: true })
  }

  render() {
    console.log(this.state)
    const { radioButtons } = this.props

    return (
      <View>
        {
          radioButtons.map((content) => (
            <CheckBox 
              title={content.title}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state[content.value]}
              onPress={() => this.onPress(content.value)}
            />
          ))
        }
      </View>
    )
  }
}

export default RadioButtonGroup