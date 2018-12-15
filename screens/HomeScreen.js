import React from 'react';
import { 
  Picker,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import { Header } from 'react-navigation';

import FormTemplate from '../components/FormTemplate'
import FormInput from '../components/FormInput'
import { CheckBox } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Birth or Death Report Form',
  };

  state = {}

  onChangeText = (text, validationRegex, id) => {
    if (!text.match(validationRegex)) return

    this.setState({ [id]: text })
  }

  onCheckBoxPress = (value) => {
    if (value == 'death') this.setState({ birth: false, death: true })
    else this.setState({ death: false, birth: true })
  }

  validateForm = () => {
    const keys = ["fullName", "mobileNumber", "patientName", "incidentTime", "hospitalName", "patientSSN"]
  }

  render() {
    const { birth, death, patientName } = this.state;
    const incident = birth ? "birth" : death ? "death" : "incident"; 
    const concernedPerson = patientName || "the concerned person";

    console.log('HomeScreen state: ', this.state)
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset = {Header.HEIGHT + 20} // adjust the value here if you need more padding
        style = {{ flex: 1 }}
        behavior = "padding"
      >
      <ScrollView style={styles.container}>
        <FormTemplate
          text={'What is your full name?'}
          renderInput={() => (
            <FormInput
              placeholder={'Eg. Maimuna Syed'}
              value={this.state['fullName']} // this should match
              onChangeText={(text) => this.onChangeText(text, /^[a-zA-Z ]+$/, 'fullName')} // this
            />
          )}
        />

        <FormTemplate
          text={'What is your mobile number?'}
          renderInput={() => (
            <FormInput
              placeholder={'Eg. 050412453'}
              value={this.state['mobileNumber']} // This should match
              onChangeText={(text) => this.onChangeText(text, /^[1234567890+]+$/, 'mobileNumber')} // this
            />
          )}
        />

        <FormTemplate
          text={"Are you reporting a birth or a death of a person?"}
          renderInput={() => (
            <View>
              <CheckBox
                title="Death"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state['death']}
                onPress={() => this.onCheckBoxPress('death')}
              />
              <CheckBox
                title="Birth"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state['birth']}
                onPress={() => this.onCheckBoxPress('birth')}
              /> 

            </View>
          )}
        />

        <FormTemplate
          text={'What is the name of the person in question?'}
          renderInput={() => (
            <FormInput
              placeholder={'Eg. Maria Syed'}
              value={this.state['patientName']} // this should match
              onChangeText={(text) => this.onChangeText(text, /^[a-zA-Z ]+$/, 'patientName')} // this
            />
          )}
        />

        <FormTemplate 
          text={`What time did the ${incident} happen?` }
          renderInput={() => (
            <FormInput
              placeholder={'Eg. 20:30'}
              value={this.state['incidentTime']} // this should match
              onChangeText={(text) => this.onChangeText(text,/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'incidentTime')} // this
            />
          )}
        />


       <FormTemplate 
           text={`Where did the ${incident} take place?`}
           renderInput={() => (
            <Picker
                selectedValue={this.state.language}
                style={{ flex:1 }}
                value= {this.state['hospitalName']}
                onValueChange={(itemValue, itemIndex) => this.setState({hospitalName: itemValue})}>
                <Picker.Item label="Cottage Medi-Clinic" value="Cottage-Medi-Clinic" />
                <Picker.Item label="Gobabis State Hospital" value="Gobabis-State-Hospital" />
                <Picker.Item label="Katutura State Hospital" value="Katutura-State-Hospital" />
                <Picker.Item label="Roman Catholic Hospital" value="Roman-Catholic-Hospital" />
                <Picker.Item label="Onandjokwe Lutheran Hospital" value="Onandjokwe-Lutheran-Hospital" />
                <Picker.Item label="Rundu State Hospital" value="Rundu-State-Hospital" />
                <Picker.Item label="Windhoek Central Hospital" value="Windhoek-Central-Hospital" />
                <Picker.Item label="Keetmanshoop State Hospital" value="Keetmanshoop-State-Hospital" />
            </Picker>
          )}
        /> 


        <FormTemplate
          text={`What is the Social Security Number (SSN) of ${concernedPerson}?`}
          renderInput={() => (
            <FormInput
              placeholder={'Eg. 050412453'}
              value={this.state['patientSSN']} // This should match
              onChangeText={(text) => this.onChangeText(text, /^[1234567890+]+$/, 'patientSSN')} 
            />
          )}
        />
      <TouchableOpacity style={styles.button} onPress={this.validateForm}>
        <Text style={styles.buttonText}>Ready</Text>
      </TouchableOpacity>

      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  button:{
    width:300, 
    height:50,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#4cbb17",
    borderRadius: 20, 
    margin:20, 
    alignSelf: "center"
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 18
  }
});
