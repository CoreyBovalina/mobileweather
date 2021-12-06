import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment";

const ThreeDayForecast = (props: any) => {
  const { forecast } = props;

  return (
    <View style={styles.container}>
      {forecast?.forecastday.map(
        (day: any, index: number) => {
          return (
            <View
              style={styles.weather}
              key={index}
            >
              <Text style={styles.header}>{moment(day?.date).format("dddd")}</Text>
              <Text style={styles.temps}>Low: {Math.round(day?.day?.mintemp_f)}</Text>
              <Text style={styles.temps}>High: {Math.round(day?.day?.maxtemp_f)}</Text>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={styles.image}
                  source={{ uri: `https:${day?.day?.condition?.icon}` }}
                />
              </View>
            </View>
          );
        }
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", flex: 1
  },
  weather: {
    alignContent: "space-between",
    padding: 5,
    alignItems: "center",
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
    height: 50,
    width: 50,
  },
});

export default ThreeDayForecast;