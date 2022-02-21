import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, FlatList } from "react-native";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState([]);
  console.log(data);

  const apiKey="96d3107260874a57b50102545221902&q"

  const getWeather = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}=Budapest&aqi=no`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  console.log();

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
     <Card current={data.current} location={data.location} timezone={data.timezone}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EFF2",
  },
});
