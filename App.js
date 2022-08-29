import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Focus} from './src/components';
import {colors} from './src/utils/colors'
import { Timer } from './src/features/timer/Timer';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Coding");

  return (
    <View style={styles.container}>
      {focusSubject ? <Timer focusSubject={focusSubject}/> : <Focus addSubject={setFocusSubject}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS == 'ios' ? spacing.md : spacing.lg,
    flex: 1,
    backgroundColor: colors.primary,
  },
});
