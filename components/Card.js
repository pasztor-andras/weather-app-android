import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Picker } from "react-native";


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


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

const Card = ({ current, location, icon, selectedCity, setSelectedCity, itemValue}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  // const image = {current ? current.condition.icon : ""}

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime((hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ampm);

      setDate(days[day] + ', ' + date+ ' ' + months[month])
    }, 1000);
  }, []);

  


  return (
    <View style={style.container}>
      <Text>Choose city</Text>
      <Picker style={style.picker}
      selectedValue={selectedCity} onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
        <Picker.Item label="Budapest" value="Budapest"></Picker.Item>
        <Picker.Item label="London" value="London"></Picker.Item>
        <Picker.Item label="Madrid" value="Madrid"></Picker.Item>
        <Picker.Item label="Berlin" value="Berlin"></Picker.Item>
        <Picker.Item label="Paris" value="Paris"></Picker.Item>
      </Picker>
      <View>
        <View>
          <Text style={style.heading}>{time}</Text>
          <Text style={style.headingdate}>{date}</Text>
        </View>
        <View style={style.subheadingcontainer}>
          <Text style={style.subheading}>{location ? location.name : ""}</Text>
          <Text style={style.subheading}>{location ? location.country : ""}</Text>
        </View>
      </View>
      <View style={style.weatherItemsContainer}>
        <WeatherItems style={style.temp} title="Temperature" value={current ? current.temp_c : ""} unit="°C" />
        <WeatherItems style={style.feels} title="Feelslike" value={current ? current.feelslike_c : ""} unit="°C" />
        <WeatherItems style={style.wind} title="Wind" value={current ? current.wind_kph : ""} unit="km/h" />
        <WeatherItems style={style.cond} title="Condition" value={current ? current.condition.text : ""} />
        <Image source={{uri: icon}} style={style.icon}></Image>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "column",
    justifyContent: "space-evenly", 
    alignItems: "center",
    flexWrap: "wrap",
    padding: 15,
  },
  picker: {
    height: 50,
    width: 100,
    borderRadius: 10,
  },
  heading: {
    color: "#06D0FD",
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5,
    fontSize: 45,
    fontWeight: "700",
  },
  headingdate: {
    marginBottom: 10,
    fontSize: 36,
    fontWeight: "600",
    color: "#06D0FD",
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5,
  },
  subheadingcontainer: {
    backgroundColor: "#06D0FD",
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 3,
    padding: 10,
    margin: "auto",
  },
  subheading: {
    color: "rgb(255, 255, 255)",
    fontWeight: "400",
    fontSize: 25,
  },
  weatherItemsContainer: {
    minHeight: "50%",
    minWidth: 400,
    alignContent: "space-around",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#06D0FD",
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 3,
    fontSize: 25,
  },
  temp: {
    fontSize: "40",
  },
  cond: {
  },
  icon: {
    width: 150,
    height: 150,
    margin: "auto",
  }, 
  wind: {},
  weatherItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemsTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "400",
  },
  weatherItemsValue: {
    color: "white",
    fontSize: 25,
    fontWeight: "100",
  },
});

export default Card;
