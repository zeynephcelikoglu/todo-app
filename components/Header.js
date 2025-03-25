import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ImageBackground } from "react-native";

export default function Header({ total = 0, completed = 0, pending = 0 }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/resim.png")}
        style={styles.gradient}
        imageStyle={{
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Daily</Text>
          <Text style={styles.titleText}>Tasks</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{total}</Text>
            <Text style={styles.statLabel}>All</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{completed}</Text>
            <Text style={styles.statLabel}>Done</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{pending}</Text>
            <Text style={styles.statLabel}>Left</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  gradient: {
    height: 400,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: "flex-start",
  },
  titleContainer: {
    marginTop: 60,
    marginBottom: 40,
  },
  titleText: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
  },
  taskInfo: {
    color: "white",
    fontSize: 16,
    marginTop: 6,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    padding: 16,
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  statLabel: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});
