import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

import ProductCard from './components/ProductCard';
import patikastore from './patikastore_data.json';

const renderProductCard = ({item}) => <ProductCard product={item} />;

function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
      <View>
        <FlatList
          data={patikastore}
          renderItem={renderProductCard}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    padding: 10,
    margin: 10,
    backgroundColor: 'gainsboro',
    color: '#dcdcdc',
  },
  title: {
    margin: 12,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default App;
