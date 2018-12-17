import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FormTemplate = ({ text, renderInput }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{text}</Text>

    { renderInput() }
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginTop: 20
  },
  text:{
    fontSize: 16,
    marginBottom: 15
  }
})

export default FormTemplate