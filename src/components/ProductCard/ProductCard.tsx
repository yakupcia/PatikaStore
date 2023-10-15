import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title} </Text>
      <Text style={styles.price}>{product.price} </Text>
      <Text style={styles.inStock}> {product.inStock ? '' : 'STOKTA YOK'}</Text>
    </View>
  );
};
export default ProductCard;
