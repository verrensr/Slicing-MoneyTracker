import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../Components';

const CashOnHand = () => {
  return (
    <View style={styles.page}>
      <Header title="Cash On Hand" onBack={() => {}}/>
      <View style={styles.input}>
        <TextInput title="Description" placeholder="Add the description"/>
        <Gap height={17}/>
        <TextInput title="Type" placeholder="Debit / Card"/>
        <Gap height={23}/>
        <Button title="Save"/>
      </View>
      <View style={styles.detail}>
        <Text style={styles.detailTitle}>Last 3 Transaction</Text>
        <Gap height={10}/>
        <View style={styles.containerBox}>
            <View style={styles.box}>
            <Text style={styles.detailItem}>17 April 2020</Text>
            <Text style={styles.detailItem1}>Water, Food</Text>
            </View>
            <Text style={styles.detailItemRed}>-Rp. 300.000</Text>
        </View>
        <Gap height={10}/>
        <View style={styles.containerBox}>
            <View style={styles.box}>
            <Text style={styles.detailItem}>18 April 2020</Text>
            <Text style={styles.detailItem1}>Office supplies</Text>
            </View>
            <Text style={styles.detailItemRed}>-Rp. 300.000</Text>
        </View>
        <Gap height={10}/>
        <View style={styles.containerBox}>
            <View style={styles.box}>
            <Text style={styles.detailItem}>19 April 2020</Text>
            <Text style={styles.detailItem1}>Top UP</Text>
            </View>
            <Text style={styles.detailItemGreen}>+Rp. 300.000</Text>
        </View>
      </View>
    </View>
  )
}

export default CashOnHand;

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    input:{
        flex: 1,
        marginTop:28,
        backgroundColor: 'white',
        paddingHorizontal:24,
        paddingTop:16,
    },
    detail:{
        flex: 1,
        marginTop:20,
        backgroundColor:'white',
        paddingHorizontal:25,
        paddingTop:16,
    },
    detailTitle:{
        fontSize:16,
        fontFamily:'Poppins',
        color:'black',
    },
    containerBox:{
        flexDirection: 'row',
        paddingLeft: 20,
        paddingVertical: 11,
        borderRadius:10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 8,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    detailItem1:{
        fontSize:14,
        fontFamily:'Poppins',
        color:'black',
    },
    detailItemGreen:{
        fontSize:14,
        fontFamily:'Poppins',
        color:'#1ABC9C',
    },
    detailItemRed:{
        fontSize:14,
        fontFamily:'Poppins',
        color:'#D9435E',
    },
    detailItem:{
        fontSize:14,
        fontFamily:'Poppins',
    },
})