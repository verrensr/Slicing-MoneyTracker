import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput, Gap} from '../../Components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button title="Sign In " onPress={() => navigation.navigate('Home')} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal:24,
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 26,
    marginTop: 24,
  },
});
