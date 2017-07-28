import React from 'react';
import { Button, TextInput, Text, View } from 'react-native';

export default class NewContactForm extends React.Component {
  constructor() {
    super()
    this.state = { text: 'Insert name...', contactsList: [] }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let contacts = this.state.contactsList
    contacts.push(this.state.text)
    this.setState({ contactsList: contacts })
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={this.handleSubmit}
          title='Add new contact'
        />
        <Text>{ this.state.contactsList }</Text>
      </View>
    )
  }
}
