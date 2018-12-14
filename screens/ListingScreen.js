import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
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

  render() {
    return (
        <ScrollView style = {styles.container}>
            {this.listAnnouncements(data.announcements)}

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
});
