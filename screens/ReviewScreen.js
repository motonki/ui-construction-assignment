import React from 'react';
import { Text, View } from 'react-native';

export default class ReviewScreen extends React.Component {
    static navigationOptions = {
        title: 'Review',
      };
    
  render() {
    return (
        <View>
            <h1>Review of your report {this.props.info["type"]}</h1>
            <Text>Date: {this.props.info["date"]}</Text>
            <Text>Name: {this.props.info["type"]}</Text>
            <Text>ID: {this.props.info["id"]}</Text>
        </View>
    );
  }
}