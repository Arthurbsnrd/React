import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar barStyle="dark-content" />
      <UserProfile name="John Doe" age={25} />
    </SafeAreaView>
  );
};

export default App;