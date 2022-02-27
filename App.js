import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Budapest");

  
  const apiKey = "96d3107260874a57b50102545221902&q";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}=${selectedCity}&aqi=no`;

  
  const bkgImage = require("./assets/pexels-lumn-1028600.jpg")
  
  const {...weatherIcon} = data.current
  const {...icon} = weatherIcon.condition
  const result = icon.icon

  
  const getWeather = async () => {
    try {
      const response = await fetch(`${url}`);
      console.log(response);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bkgImage}>
        <Card current={data.current} location={data.location} icon={result} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#A2B0B8",
  },
  bkgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
