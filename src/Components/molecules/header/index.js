import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets/icons';
import {Gap} from '../../atom';
const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}

      <Gap width={26} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 27,
    fontFamily: 'Poppins-Medium',
  },
  back: {
    padding: 10,
  },
});
