import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
        <View>
            <Text>Date: {this.props.info["date"]}, Name: {this.props.info["name"]}</Text>
            <Text>ID: {this.props.info["id"]}</Text>
        </View>
        </TouchableOpacity>
    );
  }
}