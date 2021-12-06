import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  // RefreshControl,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import { getForecast } from "./services/weatherService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Carousel from "react-native-snap-carousel";
import WeatherCard, { SLIDER_WIDTH, ITEM_WIDTH } from "./components/WeatherCard";
import ThreeDayForecast from "./components/ThreeDayForecast";
import SevenDayForecast from "./components/SevenDayForecast";
import Icon from "react-native-vector-icons/FontAwesome";

interface Location {
  zipCode: string;
  data: any;
}

// const wait = (timeout: number) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };

export default function App() {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const [refreshing, setRefreshing] = React.useState(false); not using this currently - would be used to refresh data
  const [data, setData] = useState<any>();
  const favorites = useRef<Array<Location>>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);
  const carouselRef = useRef<Carousel<any>>(null);
  const [addingFav, setAddingFav] = useState(false);
  const [gettingCurrent, setGettingCurrent] = useState(false);
  const [show7Day, setShow7Day] = useState(false);
  const [showCurrent7Day, setCurrentShow7Day] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

  // on initial load get current location and data for stored favorites
  useEffect(() => {
    getLocation();
    getData();
  }, []);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   getData();
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  //this gets the data for all items that are favorited
  const getData = async () => {
    // setRefreshing(true);
    try {
      const storedFavoritesJSON = await AsyncStorage.getItem("@favorites");
      let storedFavorites = storedFavoritesJSON != null ? JSON.parse(storedFavoritesJSON) : null;
      if (storedFavorites != null) {
        storedFavorites.map(async (favorite: Location) => {
          try {
            const data = await getForecast(favorite.zipCode);
            if (data.status === 200) {
              const index = storedFavorites.findIndex(
                (obj: Location) => obj.zipCode == favorite.zipCode
              );

              storedFavorites[index].data = data.data;
            }
          } catch (error) {
            console.log(error);
          }
        });

        favorites.current = storedFavorites;
      }
    } catch (e) {
      console.log("error", e);
    }
    // setRefreshing(false);
  };

  //gets users current location and sets current temp and conditions
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    setLoading(false);
    const local = `${coords?.latitude}, ${coords?.longitude}`;

    await getForecast(local).then((result: any) => {
      setData(result?.data);
    });
    setCurrentLocation("");
  };

  //saves active zip code to favorites
  const saveFavorite = async () => {
    if (currentLocation.length === 5) {
      setAddingFav(true);
      try {
        if (!favorites?.current?.some((val) => val.zipCode === currentLocation)) {
          const data = await getForecast(currentLocation);
          if (data.status === 200) {
            favorites.current.unshift({
              zipCode: location,
              data: data.data,
            });
            const favoriteLocations = favorites?.current;
            console.log(favoriteLocations);
            await AsyncStorage.setItem("@favorites", JSON.stringify(favoriteLocations));
          }
        } else {
          Alert.alert("Zip code exists in favorites!", "Please try a new zip code.");
        }
      } catch (error) {
        console.log(error);
      }
      carouselRef?.current?.snapToItem(0);
      setLocation("");
      setAddingFav(false);
    } else {
      Alert.alert("Zip code not valid!", "Please provide valid zip code.");
    }
  };

  //clears all favorites that are stored
  const clearAll = async () => {
    try {
      setLoading(true);
      await AsyncStorage.clear();
      setLoading(false);
    } catch (e) {
      setLoading(false)
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {loading ? (
          <View style={styles.container}>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <ScrollView keyboardShouldPersistTaps="handled">
            {/* <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            /> */}
            <View
              style={{
                flexDirection: "column",
                flex: 1,
                paddingTop: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.header}>MOBILE WEATHER APP CHALLENGE</Text>
              <View style={{ flex: 1 }}>
                <Carousel
                  layout="default"
                  layoutCardOffset={20}
                  ref={carouselRef}
                  data={favorites.current}
                  renderItem={WeatherCard}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  onSnapToItem={() => {
                    setSelectedIndex(carouselRef?.current?.currentIndex);
                  }}
                />
              </View>
              {favorites.current.length > 0 && (
                <View style={{ flexDirection: "row" }}>
                  <View style={{ borderBottomColor: "black", borderBottomWidth: show7Day ? 0 : 2 }}>
                    <Button
                      title="3-Day"
                      onPress={() => {
                        setShow7Day(false);
                      }}
                    />
                  </View>
                  <View style={{ borderBottomColor: "black", borderBottomWidth: show7Day ? 2 : 0 }}>
                    <Button
                      title="7-Day"
                      onPress={() => {
                        setShow7Day(true);
                      }}
                    />
                  </View>
                </View>
              )}
              <View style={styles.container}>
                {favorites.current.length > 0 &&
                  (!show7Day ? (
                    <View style={{ flex: 1 }}>
                      <ThreeDayForecast
                        forecast={favorites.current[selectedIndex || 0]?.data?.forecast}
                      />
                    </View>
                  ) : (
                    <View style={{ flex: 1 }}>
                      <SevenDayForecast
                        forecast={favorites.current[selectedIndex || 0]?.data?.forecast}
                      />
                    </View>
                  ))}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}></View>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={async () => {
                      setGettingCurrent(true);
                      await getLocation();
                      setGettingCurrent(false);
                    }}
                  >
                    <Icon name="location-arrow" size={25} color="blue" />
                  </TouchableOpacity>
                  <TextInput
                    testID="zipCode"
                    autoCompleteType="postal-code"
                    textContentType="postalCode"
                    placeholder="Zip Code"
                    keyboardType="numeric"
                    value={location}
                    onChangeText={setLocation}
                    style={styles.input}
                    maxLength={5}
                    clearButtonMode={"always"}
                    returnKeyType={"send"}
                  />

                  <TouchableOpacity
                    style={styles.buttonBlue}
                    disabled={gettingCurrent}
                    activeOpacity={0.5}
                    onPress={async () => {
                      Keyboard.dismiss();
                      //make sure zipCode is 5 digits in length
                      try {
                        if (location.length === 5) {
                          setGettingCurrent(true);
                          setCurrentLocation(location);
                          await getForecast(location).then((result: any) => {
                            setData(result?.data);
                          });
                          setLocation("");
                        } else {
                          Alert.alert("Zip code not valid!", "Please provide valide zip code.");
                        }
                      } catch (error) {
                        Alert.alert("Zip code not valid!", "Please provide valide zip code.");
                      }
                      setGettingCurrent(false);
                    }}
                  >
                    <Text numberOfLines={1} style={{ color: "white", fontWeight: "600" }}>
                      GET WEATHER
                    </Text>
                  </TouchableOpacity>
                </View>
                {gettingCurrent && <ActivityIndicator />}

                <Text style={styles.header}>
                  {data?.location?.name}, {data?.location?.region}
                </Text>

                <Text style={styles.temps}>Current Temp: {Math.round(data?.current?.temp_f)}</Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonOrange}
                    onPress={async () => {
                      Keyboard.dismiss();
                      await saveFavorite();
                    }}
                    disabled={addingFav || currentLocation === ""}
                  >
                    {addingFav ? (
                      <ActivityIndicator />
                    ) : (
                      <Text style={{ color: "white", fontWeight: "600" }}>ADD TO FAVORITES</Text>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                  <View
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: showCurrent7Day ? 0 : 2,
                    }}
                  >
                    <Button
                      title="3-Day"
                      onPress={() => {
                        setCurrentShow7Day(false);
                      }}
                    />
                  </View>
                  <View
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: showCurrent7Day ? 2 : 0,
                    }}
                  >
                    <Button
                      title="7-Day"
                      onPress={() => {
                        setCurrentShow7Day(true);
                      }}
                    />
                  </View>
                </View>
                {!showCurrent7Day ? (
                  <View style={{ flex: 1 }}>
                    <ThreeDayForecast forecast={data?.forecast} />
                  </View>
                ) : (
                  <View style={{ flex: 1 }}>
                    <SevenDayForecast forecast={data?.forecast} />
                  </View>
                )}
              </View>

              <Button
                title="CLEAR FAVORITES"
                onPress={() => {
                  favorites.current = [];
                  clearAll();
                  getData();
                }}
              />
            </View>
          </ScrollView>
        )}

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonBlue: {
    borderRadius: 15,
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  buttonOrange: {
    borderRadius: 15,
    backgroundColor: "orange",
    padding: 10,
    margin: 10,
    alignItems: "center",
    width: 175,
  },
});
