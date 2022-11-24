import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

const App = (navigation) => {

  const [value, setvalue] = useState('Ketan');

  const handleButton=(setvalue)=>{
    const{navigation}=props
    navigation.navigate('Display',{setvalue,navigation})
  }


return (
    <SafeAreaView style={styles.safeView}>
      <TextInput style={styles.input}
        value={value}
        onChangeText={(value)=>setvalue(value)}
        />

        <TouchableOpacity style={styles.button}
         onPress={handleButton}>
          <Text style={styles.text}>NEXT</Text>
          
        </TouchableOpacity>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeView: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    backgroundColor:'yellow',
    padding:20,
    width:150,
    borderRadius:10,
  },
  button:{
   marginTop:50,
   backgroundColor:'lime',
   padding:20,
   width:150,
   borderRadius:10,
  },
  text:{
   textAlign:'center',
   fontSize:15,
  },
  
})
export default App;