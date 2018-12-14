import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import FormTemplate from '../components/FormTemplate'
import FormInput from '../components/FormInput'
import RadioButtonGroup from '../components/RadioButtonGroup'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Birth or Death Report Form',
  };

  state = {}

  render() {
    return (
      <View style={styles.container}>

      <FormTemplate
        text={'What is your fuill name?'}
        renderInput={() => (
          <FormInput
            placeholder={'Eg. Maimuna Syed'}
            validationRegex={/^[a-zA-Z]+$/}
          />
        )}
      />

       <FormTemplate
        text={'What is your mobile number?'}
        renderInput={() => (
          <FormInput
            placeholder={'Eg. 050412453'}
            validationRegex={/^[1234567890+]+$/}
          />
        )}
      />

      <FormTemplate
        text={"Are you reporting a birth or a death of a person?"}
        renderInput={() => (
          <RadioButtonGroup radioButtons={ [
            {
              value: 'death',
              title: 'Death'
            },
            {
              value: 'birth',
              title: 'Birth'
            }
          ]}
         />
        )}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
    
  }
});
