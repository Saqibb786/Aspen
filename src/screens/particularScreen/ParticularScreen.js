import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ParticularScreen =() =>{
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/location_images/location1.png')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.backButton}>
            <FontAwesome name="arrow-left" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <FontAwesome name="heart" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Coeurdes Alpes</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color="yellow" />
            <Text style={styles.ratingText}>4.5 (355 Reviews)</Text>
          </View>
          <Text style={styles.description}>
            Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and ....
          </Text>
          <Text style={styles.link}>Read more</Text>
          <View style={styles.showMapContainer}>
            <Text style={styles.link}>Show map</Text>
          </View>
          <Text style={styles.facilitiesTitle}>Facilities</Text>
          <View style={styles.facilitiesContainer}>
            <View style={styles.facility}>
              <FontAwesome name="wifi" size={24} color="gray" />
              <Text style={styles.facilityText}>1 Heater</Text>
            </View>
            <View style={styles.facility}>
              <FontAwesome name="utensils" size={24} color="gray" />
              <Text style={styles.facilityText}>Dinner</Text>
            </View>
            <View style={styles.facility}>
              <FontAwesome name="bath" size={24} color="gray" />
              <Text style={styles.facilityText}>1 Tub</Text>
            </View>
            <View style={styles.facility}>
              <FontAwesome name="swimming-pool" size={24} color="gray" />
              <Text style={styles.facilityText}>Pool</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.price}>$199</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default ParticularScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: 'gray',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: 'gray',
  },
  link: {
    color: '#1e40af',
    marginTop: 8,
  },
  showMapContainer: {
    marginTop: 8,
  },
  facilitiesTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  facilitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  facility: {
    alignItems: 'center',
  },
  facilityText: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10b981',
  },
  bookButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
