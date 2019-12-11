import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from 'comp';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name" 
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>
        
        <CardSection>
          <Input
            label="Phone"
            placeholder="012 345 6789"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.prop.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ name: 'shift', value })}
          >
            <Picker.Item label="Monday" value="mon" />
            <Picker.Item label="Tuesday" value="tue" />
            <Picker.Item label="Wednesday" value="wed" />
            <Picker.Item label="Thursday" value="thu" />
            <Picker.Item label="Friday" value="fri" />
            <Picker.Item label="Saturday" value="sat" />
            <Picker.Item label="Sunday" value="sun" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { 
  employeeUpdate, employeeCreate 
})(EmployeeCreate);
