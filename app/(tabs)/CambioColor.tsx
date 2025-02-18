import ColorButton from '@/Components/ColorButton';
import globalStyles from '@/styles/globalStyles';
import React from 'react';
import { Text, View } from 'react-native';

const Cambiocolor = () => {

  return (
    <View style={globalStyles.container}>
      <ColorButton />
    </View>
  );
};

export default Cambiocolor;
