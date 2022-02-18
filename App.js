import React from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather</Text>
      <View>
        <Card />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.addCityWrapper}>
        <TextInput style={styles.input} placeholder={"Write a city"} />
        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addCity}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4EFF2",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 64,
  },
  addCityWrapper: {},
  input: {},
  addWrapper: {},
  addCity: {},
});
