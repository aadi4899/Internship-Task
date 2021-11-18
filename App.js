import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 40, }}
          source={require("./assets/logo.jpeg.png")} />
      </View>

      <View style={styles.container_2}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={require("./assets/Image.png")} />
      </View>
      <View style={styles.container_3}>
        <Text style={styles.details}>Login for online payment, live bus tracking monthly attendance and more</Text>
      </View>
      <View style={styles.container_3}>
        <Text style={styles.details_2}>Phone No.</Text>
        <View style={styles.container_4}>
          <TextInput style={styles.number_1} />
        </View>
      </View>

      <View style={styles.container_5}>
        <TouchableOpacity style={styles.btttn} >
          <Text style={{ textAlign: "center", marginTop: 10, fontSize: 14, color: "white", fontWeight: "800" }}>SEND OTP</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.container_3}>
        <Text style={styles.details_3}>By continuing you agree to our <Text style={{ textDecorationLine: "underline", textDecorationStyle: "solid", fontWeight: "800" }}>Terms of Services</Text> and <Text style={{ textDecorationLine: "underline", textDecorationStyle: "solid", fontWeight: "800" }}>Privacy Policy</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: "flex-start",
    height: 100,
    paddingTop: "14%",
    paddingLeft: "5%"

  },
  container_2: {
    paddingBottom: 0

  },
  container_3: {
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 30
    ,
  },
  container_4: {
    flex: 1,
    flexDirection: 'row'
    ,
  },
  container_5: {
    marginTop: 70,
    width: "85%",
    marginLeft: 22,
  },
  details: {
    fontSize: 15,
    paddingLeft: 12

  },
  details_2: {
    fontSize: 15,
    fontWeight: "700",
    paddingLeft: 12

  },
  details_3: {
    fontSize: 10,
    fontWeight: "200",
    paddingLeft: 12

  },
  number_1: {

    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    width: '90%',
    borderRadius: 10,
    borderColor: "grey",
    backgroundColor: "#d9d9d9"
  },


  btttn: {
    height: 40,
    width: "88%",
    backgroundColor: '#38b2ac',
    borderRadius: 10,
    marginLeft: 15
  }
});
