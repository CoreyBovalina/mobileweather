import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment";

const SevenDayForecast = (props: any) => {
  const { forecast } = props;
  let count = 0;
  let sevenDay = [];
  for (let i = 0; i < 7; i++) {
    if (count > 2) {
      count = 0;
    }
    moment(forecast?.forecastday[count].day.date).add(3, "days");
    sevenDay.push(forecast?.forecastday[count]);
    count++;
  }

  return (
    <View style={styles.container}>
      {sevenDay.map((day: any, index: number) => {
        return (
          <View style={styles.weather} key={index}>
            <Text style={styles.header}>
              {index < 3
                ? moment(day?.date).format("dddd")
                : index < 6
                ? moment(day?.date).add(3, "days").format("dddd")
                : moment(day?.date).add(6, "days").format("dddd")}
              :{" "}
            </Text>
            <Text style={styles.temps}>Low: {Math.round(day?.day?.mintemp_f)} </Text>
            <Text style={styles.temps}>High: {Math.round(day?.day?.maxtemp_f)} </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image style={styles.image} source={{ uri: `https:${day?.day?.condition?.icon}` }} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weather: {
    alignItems: "center",
    flexDirection: "row",
  },
  temps: {
    fontSize: 16,
    textAlign: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    resizeMode: "contain",
    height: 30,
    width: 30,
  },
});

export default SevenDayForecast;
