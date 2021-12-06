import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const WeatherCard = ({ item, index }: { item: any; index: any }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.header}>
        {item?.data?.location?.name}, {item?.data?.location?.region}
      </Text>
      <Text style={styles.body}>Curent Temp: {item?.data?.current?.temp_f}</Text>
      <Text style={styles.body}>Current Condition: {item?.data?.current?.condition?.text}</Text>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={{ uri: `https:${item?.data?.current?.condition?.icon}` }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 3,
    width: ITEM_WIDTH,
    elevation: 7,
    paddingBottom: 5,
  },
  header: {
    color: "#222",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  },
  body: {
    color: "#222",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
});

export default WeatherCard;
