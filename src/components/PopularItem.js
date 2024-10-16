import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Popular Component
const PopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={{ uri: item.image }} style={styles.popularImage} />
      <View style={styles.popularOverlay}>
        <Text style={styles.popularTitle}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{item.star}</Text>
        </View>
      </View>
    </View>
  );

export default PopularItem;

const styles = StyleSheet.create({});