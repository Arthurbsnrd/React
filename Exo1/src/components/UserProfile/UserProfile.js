import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Greeting from '../Greeting';
import styles from './styles';

const UserProfile = ({ name, age }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log(`Nombre de likes: ${likes}`);
    
    if (likes !== 0 && likes % 5 === 0) {
      console.log(`🎉 Félicitations ! Vous avez atteint ${likes} likes !`);
    }
  }, [likes]);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
  };

  return (
    <View style={styles.card}>
      <Greeting name={name} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Âge: {age} ans</Text>
        <Text style={styles.likesText}>❤️ {likes} likes</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLike}
        >
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.resetButton]} 
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;