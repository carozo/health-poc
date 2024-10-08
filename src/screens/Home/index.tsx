import React, {useEffect} from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import Connected from '../../assets/connected2.json';
import {styles} from './styles';
import {useHealth} from '../../hooks/useHealth';
import BloodGlucose from '../../assets/bloodsugar.png';

export const Home: React.FC = () => {
  const {height} = useWindowDimensions();
  const {readBloodGlucose, glucose} = useHealth();

  useEffect(() => {
    readBloodGlucose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.homeContainer, {height}]}>
      <LottieView
        source={Connected}
        autoPlay
        loop
        style={styles.lottie}
        speed={0.5}
        renderMode={'HARDWARE'}
      />
      <Image source={BloodGlucose} style={styles.glucoseImage} />
      <Text style={styles.value}>{glucose} mmolL</Text>
      <Text style={styles.text}>
        Your data is synced with your{' '}
        <Text style={styles.bold}>health provider</Text>
      </Text>
    </View>
  );
};
