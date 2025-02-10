import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Greeting = ({ name }) => {
  return (
    <Text style={styles.greeting}>
      Bienvenue, {name} !
    </Text>
  );
};

export default Greeting;