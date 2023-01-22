import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootStackNavigator} from './src/navigation';

function App() {
  const [initialRoute, setInitialRoute] = useState();

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
