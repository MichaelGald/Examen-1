import Temperaturebutton from '@/Components/Temperaturebutton';
import globalStyles from '@/styles/globalStyles';
import React from 'react';
import { Text, View } from 'react-native';


const TemperaturaApp = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.TextGlobal}>TemperaturaAPP</Text>
      <Text style={globalStyles.TextTemperature}>20</Text>
      <View style={globalStyles.row}>
        <Temperaturebutton label='-' />
        <Temperaturebutton label='+' />
      </View>
    </View>
  );
};

export default TemperaturaApp;
