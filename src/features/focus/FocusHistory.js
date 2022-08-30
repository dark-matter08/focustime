/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, FlatList, Text, SafeAreaView, StyleSheet} from 'react-native';
import {RoundedButton} from '../../components'
import { fontSizes, spacing } from '../../utils/sizes';
import {colors} from '../../utils/colors'

const HistoryItem = ({item, index}) => {
    return (
        <Text style={styles.historyItem(item.status)}>
            {`-> ${item.subject}`}
        </Text>
    )
}

const FocusHistory = ({focusHistory, onClear}) => {
    
    const clearHistory = () => {
        onClear()
    }
    return (
        <>
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                {!!focusHistory.length && 
                    <>
                        <Text style={styles.title}>Things we've focused on</Text>
                        <FlatList
                            style={{flex: 1}}
                            contentContainerStyle={{flex:1, alignItems: 'center'}}
                            data={focusHistory}
                            renderItem={HistoryItem}
                        />
                        <View style={styles.clearContainer}>
                            <RoundedButton size={75} title='Clear' onPress = {() => onClear()} />
                        </View>
                    </>
                }
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    title: {
        color: colors.white,
        fontSize: fontSizes.xl
    },
    historyItem: (status) => ({
        color: status < 1 ? colors.red : colors.green,
        fontSize: fontSizes.lg,
        fontWeight: 'bold'
    }),
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md
    }
    
});

export default FocusHistory;
