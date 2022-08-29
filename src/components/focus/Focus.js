/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../'
import { fontSizes, spacing } from '../../utils/sizes';
import {colors} from '../../utils/colors'

const Focus = ({addSubject}) => {
    const [tmpItem, setTmpItem] = useState(null)
    const submitFxn = () => {
      console.log(tmpItem)
      addSubject(tmpItem)
    };
    return (
        <View style={
            styles.container
        }>
            <View style={
                styles.titleContainer
            }>
                <Text style={
                    styles.title
                }>What would you like to focus on?</Text>
                <View style={
                    styles.inputContainer
                }>
                    <TextInput 
                      style={
                          {
                              flex: 1,
                              marginRight: spacing.md
                          }
                      }
                      onSubmitEditing = {
                          ({nativeEvent}) => {
                            setTmpItem(nativeEvent.text)
                          }
                      }
                    />
                    <RoundedButton size={50}
                        title='+' onPress={submitFxn} 
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        flex: 0.5,
        padding: spacing.md,
        justifyContent: 'center'
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fontSizes.lg
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Focus;
