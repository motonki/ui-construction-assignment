import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class FormInput extends Component {
  render() {
    const { placeholder, error, ...props } = this.props

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
