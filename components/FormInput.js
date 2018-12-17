import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

class FormInput extends Component {
  render() {
    const { error, placeholder, ...props } = this.props

    return (
        <TextInput
          style={[styles.input, error && styles.error]}
          placeholder={placeholder}
          {...props}
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
  },
  error: {
    borderColor: 'red'
  }
})

export default FormInput