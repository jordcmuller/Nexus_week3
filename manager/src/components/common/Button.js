import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
  const { buttonStyle, textStyle } = styles;
  const { children, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },

  buttonStyle: {
    // flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    // alignItems: 'center',
  },
};

export { Button };
