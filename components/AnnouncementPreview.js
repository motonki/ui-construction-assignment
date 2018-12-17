import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ReviewScreen from '../screens/ReviewScreen.js';

export default class AnnouncementPreview extends React.Component {
    static ReviewStack = createStackNavigator({
        Review: ReviewScreen,
      });

    _onPress = () => {
        console.log("foo")
      };
  render() {
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Review", {info: this.props.info})}>
        <View style = {styles.wrapper}>
            <Text style = {styles.text}>Date: {this.props.info["date"]}, Name: {this.props.info["name"]}</Text>
            <Text style = {styles.text}>ID: {this.props.info["id"]}</Text>
        </View>
        </TouchableOpacity>
    );
  }
}

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