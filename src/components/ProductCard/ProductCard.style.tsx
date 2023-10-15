import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2,
  },
  title: {
    margin: 1,
    fontWeight: 'bold',
    fontSize: 17,
  },
  price: {
    marginLeft: 15,
    fontSize: 17,
  },
  image: {
    height: 190,
    width: 165,
    borderRadius: 15,
    margin: 13,
  },
  inStock: {
    color: 'red',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
