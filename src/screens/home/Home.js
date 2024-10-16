import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import POPULAR from '../../assets/data/Data';
import RECOMMENDED from '../../assets/data/Data';
import PopularItem from '../../components/PopularItem';
import RecommendedItem from '../../components/RecommendedItem';
// Home Screen
const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.headerText}>Explore</Text>
    <Text style={styles.locationText}>Aspen, USA</Text>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Popular</Text>
      <FlatList
        horizontal
        data={POPULAR}
        renderItem={({ item }) => <PopularItem item={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recommended</Text>
      <FlatList
        numColumns={2}
        data={RECOMMENDED}
        renderItem={({ item }) => <RecommendedItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </View>
);


export default HomeScreen;
// Dummy Screen
const DummyScreen = () => (
  <View style={styles.container}>
    <Text>Coming Soon</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  popularItem: {
    width: 150,
    marginRight: 12,
  },
  popularImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  popularOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  popularTitle: {
    color: 'white',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
  },
  recommendedItem: {
    flex: 1,
    margin: 4,
  },
  recommendedImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  recommendedOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  recommendedTitle: {
    color: 'white',
    fontSize: 14,
  },
  recommendedContent: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});


