import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage, Text } from 'react-native';
import AnnouncementPreview from '../components/AnnouncementPreview.js'
import data from '../data/data.json';

export default class ListingScreen extends React.Component {

  static navigationOptions = {
    title: 'Listing',
  };

  createPreview(details) {
      return (
          <AnnouncementPreview key = {details} />
      );
  }

  _renderItem = ({item}) => (
    <AnnouncementPreview
      key = {item.id.toString()}
      info = {item}
    />
  );
  
  listAnnouncements(announcements) {
      return(
          announcements.map((announcement) =>
          <AnnouncementPreview key = {announcement.id.toString()} info = {announcement}/>)
      );
  }

  async onScreenLoad()  {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        return JSON.parse(items[0][1]);
      } catch (error) {
        // Error retrieving data
   
        console.log("go to status error----"+error)
      }
  }

  render() {
    let inputs = this.onScreenLoad().then();
    console.log(inputs);
    let temp = ["Foo", "bar"];
    return (
        <ScrollView style = {styles.wrapper}>
           <Text> {temp} </Text>

        </ScrollView>
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