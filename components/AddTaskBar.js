import React from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddTaskBar({ value, onChange, onSubmit }) {
  return (
    <View style={styles.container}>
      {" "}
      {}
      <TextInput
        style={styles.input}
        placeholder="New task..."
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Ionicons name="add" size={24} color="#d1d5db" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "white",
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  input: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
