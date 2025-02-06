import React from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Morning',
    data: [
      { id: '1', name: 'Breakfast' },
      { id: '2', name: 'Exercise' },
      { id: '3', name: 'Cleaning house' },
      { id: '4', name: 'Shower' },
      { id: '5', name: 'Rest' },
   
    ],
  },
  {
    title: 'Afternoon',
    data: [
      { id: '6', name: 'Listen to music' },
      { id: '7', name: 'Prefer for school' },
      { id: '8', name: 'Go to school' },
      { id: '9', name: 'Review' },
      { id: '10', name: 'Rest' },


    ],
  },
  {
    title: 'Evening',
    data: [
      { id: '11', name: 'Eat' },
      { id: '12', name: 'Socmed' },
      { id: '13', name: 'Tita duty' },
      { id: '14', name: 'washing dishes' },
      { id: '15', name: 'sleep' },
    ],
  },
  {
     title: 'Hobbies',
    data: [
      { id: '11', name: 'Watching Movies' },
      { id: '12', name: 'Shopping' },
      { id: '13', name: 'Going Out' },
      { id: '14', name: 'Play with my dogs' },
      { id: '15', name: 'Travel' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { id: '16', name: 'Cheese Cake' },
      { id: '17', name: 'Ice Cream' },
      { id: '18', name: 'Cake' },
      { id: '19', name: 'Chocolates' },
      { id: '20', name: 'Cookies' },
      { id: '16', name: 'Pancake' },
      { id: '17', name: 'Brownies' },
      { id: '18', name: 'Biscuits' },
      { id: '19', name: 'Halo-Halo' },
      { id: '20', name: 'Leche Flan' },
      
      

    ],
  },
];
const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id} // Use the id as the key
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text> {/* Access item.name */}
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;