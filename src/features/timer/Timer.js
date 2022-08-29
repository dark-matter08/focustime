import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
import { Countdown, RoundedButton } from "../../components";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";

export const Timer = ({focusSubject}) => {
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(1)

    const onProgress = (progress) => {
        setProgress(progress)
    }

    const changeTime = (min) => {
        setMinutes(min)
        setProgress(1)
        setIsStarted(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}  
                    isPaused={!isStarted} 
                    onProgress={onProgress}
                />
            </View>
            <View style={{paddingTop:spacing.xxl}}>
                <Text style={styles.title}>Focussing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={{marginTop: spacing.md}}>
                <ProgressBar 
                    progress={progress}
                    color='#5384e2' 
                    style={{height: 10}} 
                />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={changeTime}/>
            </View>
            <View style={styles.buttonWrapper}>
                { isStarted ?(
                    <RoundedButton title='pause' onPress={() => setIsStarted(false)} />
                    ) : (
                    <RoundedButton title='start' onPress={() => setIsStarted(true)} />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: fontSizes.lg
    },
    task: {
        color: colors.accent,
        fontWeight: 'bold',
        fontSize: fontSizes.xl,
        textAlign: 'center'
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})