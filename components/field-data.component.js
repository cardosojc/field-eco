import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Input, Text, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import moment from 'moment';

const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Autumn'
];

const dayNight = [
  'Day',
  'Night'
];

const moon = [
  'New',
  'Crescent',
  'Full',
  'Wanning'
];

export const FieldDataScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  //Survey Code
  const [surveyCode, setSurveyCode] = React.useState('');

  //Season
  const [seasonIndex, setSeasonIndex] = React.useState(new IndexPath(0));
  const seasonValue = seasons[seasonIndex.row];

  //DayNight
  const [dayNightIndex, setDayNightIndex] = React.useState(new IndexPath(0));
  const dayNightValue = dayNight[dayNightIndex.row];

  //DayNight
  const [moonIndex, setMoonIndex] = React.useState(new IndexPath(0));
  const moonValue = moon[moonIndex.row];

  //Low Tide
  const [lowTide, setLowTide] = React.useState('');

  const renderOption = (title) => (
    <SelectItem title={title}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Field Data' alignment='center'/>
      <Layout style={styles.container} level='1'>
        <Text>Survey Info</Text>
        <Input
          label='Date'
          style={styles.input}
          value={moment().format('MMMM Do YYYY, h:mm:ss a')}
          disabled={true}
        />
        <Input
          label='SurveyCode'
          style={styles.input}
          value={surveyCode}
          onChangeText={nextValue => setSurveyCode(nextValue)}
        />
      <Divider/>
      <Text>Environmental Conditions</Text>
      <Select
        label='Season'
        value={seasonValue}
        selectedIndex={seasonIndex}
        onSelect={index => setSeasonIndex(index)}>
        {seasons.map(renderOption, seasonIndex)}
      </Select>
      <Select
        label='Day/Night'
        value={dayNightValue}
        selectedIndex={dayNightIndex}
        onSelect={index => setDayNightIndex(index)}>
        {dayNight.map(renderOption)}
      </Select>
      <Select
        label='Moon'
        value={moonValue}
        selectedIndex={moonIndex}
        onSelect={index => setMoonIndex(index)}>
        {moon.map(renderOption)}
      </Select>
      <Input
          label='Low Tide(level)'
          style={styles.input}
          value={lowTide}
          onChangeText={nextValue => setLowTide(nextValue)}
          keyboardType='numeric'
        />
      </Layout>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>Validate</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
    padding: 10
  },
});
