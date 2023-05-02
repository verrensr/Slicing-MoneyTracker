import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button, Gap} from '../../Components';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
    <View style={styles.container}>
    <View>
      <Text style={styles.title} >Money Tracker</Text>
      <Text style={styles.subtitle}>Track yout money</Text>
    </View>
        <View style={styles.addPhoto}>
              <Text style={styles.addPhotoText}>Add Photo</Text>
        </View>
    </View>
    <View style={styles.balance}>
        <Text style={styles.balanceTitle}>
            Your Balance
        </Text>
        <View style={styles.balanceTotalContainer}>
        <Text style={styles.balanceTotal}>
            Rp. 10.000.000
        </Text>
        <View style={styles.line}></View>
        </View>
        <Text style={styles.balanceDesc}>
            Cash on Hand       Rp. 4.000.000
        </Text>
        <Text style={styles.balanceDesc}>
            Cash on Hand       Rp. 6.000.000
        </Text>
    </View>
    <View style={styles.buttonContainer}>
        <Text style={styles.balanceTotal}>Add Transaction</Text>
        <Gap height={10}/>
        <Button title="Cash On Hand" onPress={() => navigation.navigate('CashOnHand')}/>
        <Gap height={15}/>
        <Button title="Cash On Bank" onPress={() => navigation.navigate('CashOnBank')}/>
    </View>
    <View style={styles.navigationMenu}>

    </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
      page:{
        flex: 1,
      },
      container:{
        flexDirection: 'row',
        paddingLeft: 24,
        paddingVertical: 38,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 24,
      },
      title:{
        fontSize: 27,
        fontFamily: 'Poppins-Medium',
        color:'#020202',
      },
      subtitle: {
        fontSize: 14,
        fontFamily: "Poppins",
      },
      addPhoto: {
        height: 50,
        width: 50,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
      },
      addPhotoText: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        maxWidth: 40,
        textAlign: 'center',
      },
      balance:{
        marginTop: 20,
        paddingLeft:24,
        paddingRight:24,
        backgroundColor: 'white',
        paddingBottom:40,
        paddingTop: 14,
      },
      balanceTitle:{
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins',
      },
      balanceTotalContainer:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      balanceTotal:{
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins',
      },
      line:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '100%',
        marginVertical: 18,
      },
      balanceDesc:{
        color: 'black',
        fontSize: 14,
        fontFamily: 'Poppins',
      },
      buttonContainer:{
        flex:1,
        marginTop:20,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 70,
        backgroundColor: 'white',
      },
})