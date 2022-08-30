import React, { useState } from "react";
import { View, StyleSheet, Text, Vibrate, Platform, Vibration } from "react-native";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
import { Countdown, RoundedButton } from "../../components";
import { ProgressBar } from "react-native-paper";
import { Timing } from "..";
// import { useKeepAwake } from "expo-keep-awake";
import KeepAwake from 'react-native-keep-awake';

const DEFAULT_TIME = 0.1;

const Timer = ({focusSubject, onTimerEnd, onCancel}) => {
    // useKeepAwake();
    KeepAwake.activate();
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(DEFAULT_TIME)

    const onProgress = (progress) => {
        setProgress(progress)
    }

    const vibrate = () => {
        if(Platform.OS == 'ios') {
            const interval = setInterval(() => Vibrate.vibrate(), 1000)
            setTimeout(() => clearInterval(interval), 10000);
        } else {
            Vibration.vibrate(10000)
        }
    }

    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    }

    const onEnd = () => {
        vibrate();
        setMinutes(DEFAULT_TIME);
        setProgress(1);
        setIsStarted(false);
        onTimerEnd()
    }
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}  
                    isPaused={!isStarted} 
                    onProgress={onProgress}
                    onEnd={onEnd}
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
            <RoundedButton title='-' size={70} onPress={() => onCancel()} />

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

export default Timer;