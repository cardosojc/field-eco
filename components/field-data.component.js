import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Input,
  Text,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import { TopNavigationFieldData } from "./top-navigation-field-data-component";

const seasons = ["Winter", "Spring", "Summer", "Autumn"];

const dayNight = ["Day", "Night"];

const moon = ["New", "Crescent", "Full", "Wanning"];

const seaConditions = [
  "Good(Waves<1m)",
  "Poor(1m<Waves<3m)",
  "Bad(3m<Waves<5m)",
  "Very bad(Waves>5m)",
];

const weather = ["Clean", "Cloudly", "Sprinkles", "Rain", "Storm"];

const wind = ["Absent", "Weak", "Moderate", "Strong"];

export const FieldDataScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  //Survey Code
  const [surveyCode, setSurveyCode] = React.useState("");

  //Season
  const [seasonIndex, setSeasonIndex] = React.useState(new IndexPath(0));
  const seasonValue = seasons[seasonIndex.row];

  //DayNight
  const [dayNightIndex, setDayNightIndex] = React.useState(new IndexPath(0));
  const dayNightValue = dayNight[dayNightIndex.row];

  //Moon
  const [moonIndex, setMoonIndex] = React.useState(new IndexPath(0));
  const moonValue = moon[moonIndex.row];

  //Low Tide
  const [lowTide, setLowTide] = React.useState("");

  //Sea Conditions
  const [seaConditionsIndex, setSeaConditionsIndex] = React.useState(
    new IndexPath(0)
  );
  const seaConditionsValue = seaConditions[seaConditionsIndex.row];

  //Weather
  const [weatherIndex, setWeatherIndex] = React.useState(new IndexPath(0));
  const weatherValue = weather[weatherIndex.row];

  //Wind
  const [windIndex, setWindIndex] = React.useState(new IndexPath(0));
  const windValue = wind[windIndex.row];

  //Water Visibility
  const [waterVisibility, setWaterVisibility] = React.useState("");

  //SST
  const [sst, setSst] = React.useState("");

  const renderOption = (title) => <SelectItem title={title} />;

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigationFieldData />
        <Layout style={styles.container} level="1">
          <Text>Survey Info</Text>
          <Input
            label="Date"
            style={styles.input}
            value={moment().format("MMMM Do YYYY, h:mm:ss a")}
            disabled={true}
          />
          <Input
            label="SurveyCode"
            style={styles.input}
            value={surveyCode}
            onChangeText={(nextValue) => setSurveyCode(nextValue)}
          />
          <Divider />
          <Text>Environmental Conditions</Text>
          <Select
            label="Season"
            value={seasonValue}
            selectedIndex={seasonIndex}
            onSelect={(index) => setSeasonIndex(index)}
          >
            {seasons.map(renderOption, seasonIndex)}
          </Select>
          <Select
            label="Day/Night"
            value={dayNightValue}
            selectedIndex={dayNightIndex}
            onSelect={(index) => setDayNightIndex(index)}
          >
            {dayNight.map(renderOption)}
          </Select>
          <Select
            label="Moon"
            value={moonValue}
            selectedIndex={moonIndex}
            onSelect={(index) => setMoonIndex(index)}
          >
            {moon.map(renderOption)}
          </Select>
          <Input
            label="Low Tide(level)"
            style={styles.input}
            value={lowTide}
            onChangeText={(nextValue) => setLowTide(nextValue)}
            keyboardType="numeric"
          />
          <Select
            label="Sea Conditions"
            value={seaConditionsValue}
            selectedIndex={seaConditionsIndex}
            onSelect={(index) => setSeaConditionsIndex(index)}
          >
            {seaConditions.map(renderOption)}
          </Select>
          <Select
            label="Weather"
            value={weatherValue}
            selectedIndex={weatherIndex}
            onSelect={(index) => setWeatherIndex(index)}
          >
            {weather.map(renderOption)}
          </Select>
          <Select
            label="Wind"
            value={windValue}
            selectedIndex={windIndex}
            onSelect={(index) => setWindIndex(index)}
          >
            {wind.map(renderOption)}
          </Select>
          <Input
            label="Water Visibility"
            style={styles.input}
            value={waterVisibility}
            onChangeText={(nextValue) => setWaterVisibility(nextValue)}
            keyboardType="numeric"
          />
          <Input
            label="SST (ºC)"
            style={styles.input}
            value={sst}
            onChangeText={(nextValue) => setSst(nextValue)}
            keyboardType="numeric"
          />
        </Layout>
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button onPress={navigateDetails}>Validate</Button>
        </Layout>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
    padding: 10,
  },
});
