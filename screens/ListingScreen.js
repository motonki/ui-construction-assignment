import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage } from 'react-native';
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

  onScreenLoad = async() => {
      try {
        return await AsyncStorage.getItem("@RECORDS")
      } catch (error) {
        // Error retrieving data
   
        console.log("go to status error----"+error)
      }
  }

  render() {
    storedData = this.onScreenLoad();
    console.log(storedData);
    return (
        <ScrollView style = {styles.wrapper}>
            {this.listAnnouncements(storedData)}

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