import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = props => {
  return (
    <View style={style.card}>
      <Text style={style.title}></Text>
      <Text style={style.temp}></Text>
      <Text style={style.hum}></Text>
      <Text style={style.cloud}></Text>
      <TouchableOpacity style={style.close} />
    </View>
  );
};

const style = StyleSheet.create({
  card: {
      backgroundColor: '#B9E8E8',
  },
  close: {},
  title: {},
  temp: {},
  hum: {},
  cloud: {},
});

export default Card;
