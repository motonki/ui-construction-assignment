import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

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
    name: "address",
    label: "Your address"
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
    name: "hospitalRef",
    label: "Hospital referral number"
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


  onEdit = (data) => {
        console.log("EDIT-----")
        this.props.navigation.navigate('Home', data)
  }


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

      // Set new list to local storage. Arrajjy of objects needs to be stringified
      await AsyncStorage.setItem("@RECORDS", JSON.stringify(storedData))


      const resetAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
      this.props.navigation.navigate('Listing');

      //this.props.navigation.navigate('Listing')
      alert("Form is successfully sent to the government!! Check the status page to see if the report has been accepted. This process will take a week. You will also be notified on a document sent to you by post to your address");
      

   } catch (error) {
     // Error retrieving data

     console.log("go to status error----"+error)
   }
    
  }

  render() {
    const data =  this.props.navigation.state.params || {}
    console.log("params---------", data)
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

              <TouchableOpacity style={styles.button} onPress={() => this.onEdit(data)}>
              <Text style={styles.buttonText}>Edit</Text>
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
  },
  rowText: {
    flex: 1,
    fontSize: 16,
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
    fontSize: 16
  }
})