import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

// Fields names and labels to be shown in Review page
const fields = [
  {
    name: "fullName",
    label: "Your full name"
  },
  {
    name: "mobileNumber",
    label: "Your mobile number"
  },
  {
    name: "patientName",
    label: "Name of person concerned"
  },
  {
    name: "birthOrDeath",
    label: "Birth or Death"
  },
  {
    name: "incidentTime",
    label: "Time of incident"
  },
  {
    name: "hospitalName",
    label: "Name of hospital"
  },
  {
    name: "patientSSN",
    label: "Social Security Number (SSN) of person concerned"
  }
] 


// Each individual row of Review screen
const Row = ({ title, text}) => (
  <View style={styles.rowContainer}>
    <Text style={styles.rowTitle}>{title}</Text>
    <Text style={styles.rowText}>{text}</Text>
  </View>
)


export default class ReviewScreen extends React.Component {
  static navigationOptions = {
      title: 'Review',
  };
  
  onSubmit = async(data) => {
    // Generate unique id to identify record later
    data['id'] = 'id-' + Math.random().toString(36).substr(2, 16)
    
    if (data.emptyFields) delete data.emptyFields // This came from HomeScreen state and needs to be removed here

    // Save data to AsyncStorage (local storage for react native)
    try {
      let storedData = await AsyncStorage.getItem("@RECORDS")

      // If value does not exist, set it as empty array
      storedData = storedData ? JSON.parse(storedData) : []

      // Push new data obj to stored data array
      storedData.push(data)

      // Set new list to local storage. Array of objects needs to be stringified
      await AsyncStorage.setItem("@RECORDS", JSON.stringify(storedData))
   } catch (error) {
     // Error retrieving data
   }
    
  }

  render() {
    const data =  this.props.navigation.state.params || {}
    console.log("params----------", data)
    return (
        <ScrollView style={styles.container}>
            {
              data && fields.map((field) => (
                <Row key={field.name} title={field.label} text={data[field.name] || ""} />
              ))
            }

            <TouchableOpacity style={styles.button} onPress={() => this.onSubmit(data)}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d6d6',
    padding: 10,
    paddingRight: 20
  },
  rowTitle: {
    flex: 1,
    fontWeight: "600",
    fontSize: 14,
    fontFamily: 'Avenir'
  },
  rowText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Avenir',
    textAlign: 'right'
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#4cbb17',
    borderRadius: 20,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 16
  }
})