import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'application !</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Aller au Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
