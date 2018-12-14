import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class FormInput extends Component {

  state = {
    input: ''
  }

  onChangeText = (text) => {
    const { validationRegex } = this.props

    if (!text.match(validationRegex)) return

    this.setState({ input: text })
  }

  render() {
    console.log('FOrm Input render')
    const { text, placeholder } = this.props
    const { input } = this.state

    return (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={input}
          onChangeText={this.onChangeText}
        />
    )
  }
}

const styles = StyleSheet.create({
  input:{
    borderColor: "grey",
    borderWidth: 0.5,
    fontSize: 16,
    padding: 5,
    borderRadius: 10
  }
})

export default FormInput
