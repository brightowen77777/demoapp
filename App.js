import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View, Text, StyleSheet,Button,TextInput, Image} from 'react-native';

export default function App () {
  const[revenue,setRevenue] =useState(0);
  const[expenses,setExpenses] =useState(0);
  const[status,setStatus] =useState(false);

  function TaxCalculator() {
    const profit = revenue - expenses;
    const cit = (20 / 100) * revenue;
    const vat = (7.5 / 100) * profit;
    const total = cit + vat;

    return (
      <View style={styles.summary}>
        <Text style={styles.summaryLine}>Your Revenue : {revenue}</Text>
        <Text style={styles.summaryLine}>Your Expense : {expenses}</Text>
        <Text style={styles.summaryLine}>Your Profit : {Profit}</Text>
        <Text style={styles.summaryLine}>Cit Tax : {cit}</Text>
        <Text style={styles.summaryLine}>Vat Tax : {vat}</Text>
        <Text style={styles.summaryLine}> Total Tax to pay : {total}</Text>
        
      </View>
    )
  }
  return(
    <View style={styles.container}>
      <View style={styles.logoWarpper}>
        <Image source={require('./assets/image/firs.jpg')}
        style={styles.logo}
        />
        <Text style={styles.heading}>Company Tax Calculator</Text>
      </View>

     {status ? TaxCalculator() : null}
      <TextInput
       style={styles.input} 
      placeholder='Total revenue'
      onChangeText={(revenueInput) => setRevenue(revenueInput)}
      />
      <TextInput
       style={styles.input} 
      placeholder='Total expense'
      onChangeText={(expenseInput) => setExpenses(expenseInput)}
      />
      <Button title='CALCULATE TAX' onPress={() => {
        TaxCalculator;
        setStatus(true);
        }}/>
      
      <StatusBar style='auto'/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  input:{
    paddingVertical:14,
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50
  },
  logoWarpper:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20

  },
  logo:{
    width:80,
    height:80,
    borderRadius:50
  },
  heading:{
    fontsize:28,
  },
  summary:{
    padding:10,
    backgroundColor:'skyblue',
    borderRadius:8
  },
  summaryLine:{
    borderBottomWidth:1,
    backgroundColor:'blue'
  }
})