import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const WeatherItems = ({ title, value, unit }) => {
  return (
    <View style={style.weatherItems}>
      <Text style={style.weatherItemsTitle}>{title}</Text>
      <Text style={style.weatherItemsValue}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const Card = ({current, location, timezone}) => {

  const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            // setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])

  return (
    <View style={style.container}>
      <View>
        <View>
          <Text style={style.heading}>{time}</Text>
        </View>
        <View>
          <Text style={style.subheading}>{date}</Text>
          <Text style={style.subheading}>{location ? location.name : ""}</Text>
          <Text style={style.subheading}>{location ? location.country : ""}</Text>
        </View>
      </View>
      <View style={style.weatherItemsContainer}>
        <WeatherItems style={style.temp} title="Temperature" value={current ? current.temp_c : ""} unit="°C" />
        <WeatherItems style={style.feels} title="Feelslike" value={current ? current.feelslike_c : ""} unit="°C" />
        <WeatherItems style={style.cond} title="Condition" value={current ? current.condition.text : ""} />
        <WeatherItems style={style.icon} value="icon"/>
        <WeatherItems style={style.wind} title="Wind" value={current ? current.wind_kph : ""} unit="km/h" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 15,
    backgroundColor: "#B9E8E8",
  },
  heading: {
    color: "black",
    fontSize: 45,
    fontWeight: "100",
  },
  subheading: {
    color: "red",
    fontSize: 25,
    fontWeight: "300",
  },
  weatherItemsContainer: {
    // height: "30%",
    // width: 200,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#18181b99",
    borderRadius: 10,
    alignContent: "space-around",
  },
  temp: {},
  cond: {},
  icon: {},
  wind: {},
  weatherItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemsTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "100",
  },
  weatherItemsValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "100",
  },
});

export default Card;
