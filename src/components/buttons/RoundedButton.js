import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const RoundedButton = ({style = {}, textStyle = {}, size = 150, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = size =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: size / 3,
    },
  });
export default RoundedButton;
