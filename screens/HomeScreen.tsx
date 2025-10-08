import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const placesData = [
  {
    id: 1,
    name: "Cabo De Rama",
    location: "Canacona, Goa",
    rating: 4.8,
    description: "An ancient fort, an old Portuguese church, a short trek",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=300",
    tag: "Local Gem",
    tagColor: "green",
    crowdLevel: "low",
    crowdColor: "green"
  },
  {
    id: 2,
    name: "Old Goa Church",
    location: "Old Goa, Goa",
    rating: 4.7,
    description: "An ancient fort, an old Portuguese church, a short trek",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=300",
    tag: "Religious",
    tagColor: "yellow",
    crowdLevel: "medium",
    crowdColor: "yellow"
  },
  {
    id: 3,
    name: "Cabo De Rama",
    location: "Canacona, Goa",
    rating: 4.9,
    description: "An ancient fort, an old Portuguese church, a short trek",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=300",
    tag: "Local Gem",
    tagColor: "green",
    crowdLevel: "high",
    crowdColor: "red"
  },
  {
    id: 4,
    name: "Dudhsagar Falls",
    location: "Mollem, Goa",
    rating: 4.6,
    description: "Majestic four-tiered waterfall, perfect for nature lovers",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=300",
    tag: "Adventure",
    tagColor: "blue",
    crowdLevel: "high",
    crowdColor: "red"
  },
  {
    id: 5,
    name: "Chapora Fort",
    location: "Vagator, Goa",
    rating: 4.5,
    description: "Famous fort with panoramic views, featured in Bollywood",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=300",
    tag: "Historical",
    tagColor: "purple",
    crowdLevel: "medium",
    crowdColor: "yellow"
  },
  {
    id: 6,
    name: "Palolem Beach",
    location: "Canacona, Goa",
    rating: 4.8,
    description: "Crescent-shaped beach with calm waters and scenic beauty",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=300",
    tag: "Beach",
    tagColor: "blue",
    crowdLevel: "medium",
    crowdColor: "yellow"
  }
];
// Icon components as simple SVG replacements
const SearchIcon = () => (
  <Text style={{ fontSize: 20, color: '#999' }}>🔍</Text>
);

const FilterIcon = () => (
  <Text style={{ fontSize: 18, color: '#666' }}>⚙️</Text>
);

const CalendarIcon = () => (
  <Text style={{ fontSize: 18, color: '#666' }}>📅</Text>
);

const BellIcon = () => (
  <Text style={{ fontSize: 20, color: '#666' }}>🔔</Text>
);

const UserIcon = () => (
  <Text style={{ fontSize: 20, color: '#666' }}>👤</Text>
);

const BackIcon = () => (
  <Text style={{ fontSize: 24, color: '#000' }}>←</Text>
);

const ShareIcon = () => (
  <Text style={{ fontSize: 20, color: '#000' }}>↗️</Text>
);

const HeartIcon = ({ filled }:any) => (
  <Text style={{ fontSize: 24, color: filled ? '#ff0000' : '#000' }}>{filled ? '❤️' : '🤍'}</Text>
);

const StarIcon = () => (
  <Text style={{ fontSize: 14, color: '#FFD700' }}>⭐</Text>
);

const TrendingIcon = () => (
  <Text style={{ fontSize: 24, color: '#3B82F6' }}>📈</Text>
);

const SavedIcon = () => (
  <Text style={{ fontSize: 24, color: '#10B981' }}>💾</Text>
);

const VisitedIcon = () => (
  <Text style={{ fontSize: 24, color: '#8B5CF6' }}>📍</Text>
);

const DirectionsIcon = () => (
  <Text style={{ fontSize: 18, color: '#fff' }}>🧭</Text>
);

const ClockIcon = () => (
  <Text style={{ fontSize: 18, color: '#666' }}>🕐</Text>
);

const WifiIcon = () => (
  <Text style={{ fontSize: 18, color: '#10B981' }}>📶</Text>
);

const ParkingIcon = () => (
  <Text style={{ fontSize: 18, color: '#EF4444' }}>🅿️</Text>
);

const CardIcon = () => (
  <Text style={{ fontSize: 18, color: '#3B82F6' }}>💳</Text>
);

const FamilyIcon = () => (
  <Text style={{ fontSize: 18, color: '#8B5CF6' }}>👨‍👩‍👧‍👦</Text>
);

function HomeScreen() {
  // Helper function to get tag background color
  const getTagBgColor = (color:any) => {
    const colors = {
      green: 'bg-green-50',
      yellow: 'bg-yellow-50',
      blue: 'bg-blue-50',
      purple: 'bg-purple-50',
      red: 'bg-red-50'
    };
    return colors[color] || 'bg-gray-50';
  };

  // Helper function to get tag text color
  const getTagTextColor = (color:any) => {
    const colors = {
      green: 'text-green-600',
      yellow: 'text-yellow-900',
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      red: 'text-red-600'
    };
    return colors[color] || 'text-gray-600';
  };

  // Helper function to get crowd dot color
  const getCrowdDotColor = (color:any) => {
    const colors = {
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500',
      blue: 'bg-blue-500'
    };
    return colors[color] || 'bg-gray-500';
  };

  const navigation = useNavigation()

  return (
    <ScrollView className="flex-1 bg-gray-50 pt-7">
      {/* Header */}
      <View className="bg-white px-5 pt-3 pb-5">
        <View className="flex-row justify-between items-center mb-5">
          <View>
            <View className="flex-row">
              <Text className="text-2xl font-bold text-blue-500">TO</Text>
              <Text className="text-2xl font-bold text-green-500">U</Text>
              <Text className="text-2xl font-bold text-red-500">R</Text>
              <Text className="text-2xl font-bold text-purple-500">Z</Text>
              <Text className="text-2xl font-bold text-yellow-500">Y</Text>
            </View>
            <Text className="text-xs text-gray-600 mt-1">Farmagudi, Goa</Text>
          </View>
          <View className="flex-row gap-4">
            <Text className="text-lg">📅</Text>
            <Text className="text-lg">🔍</Text>
            <Text className="text-lg">🔔</Text>
            <Text className="text-lg">👤</Text>
          </View>
        </View>
        
        {/* Search Bar */}
        <View className="flex-row gap-2">
          <View className="flex-1 flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
            <Text className="text-lg">🔍</Text>
            <Text className="ml-2 text-gray-400 text-sm">Search for places, experiences...</Text>
          </View>
          <TouchableOpacity className="bg-gray-100 rounded-lg px-4 justify-center items-center">
            <Text className="text-base">⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View className="bg-white mt-2 py-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-2">
          <TouchableOpacity className="bg-blue-500 rounded-full px-5 py-2.5 mr-2 flex-row items-center">
            <Text className="text-base">🧭</Text>
            <Text className="text-white font-semibold ml-2">Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-5 py-2.5 mr-2 flex-row items-center border border-gray-200">
            <Text className="text-base">👥</Text>
            <Text className="text-gray-600 font-semibold ml-2">Crowd</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-5 py-2.5 mr-2 flex-row items-center border border-gray-200">
            <Text className="text-base">💰</Text>
            <Text className="text-gray-600 font-semibold ml-2">Prices</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full px-5 py-2.5 mr-2 flex-row items-center border border-gray-200">
            <Text className="text-base">💎</Text>
            <Text className="text-gray-600 font-semibold ml-2">Hidden</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Stats Cards */}
      <View className="flex-row px-5 py-4 gap-2">
        <View className="flex-1 bg-blue-50 rounded-xl p-4 items-center">
          <Text className="text-2xl">📈</Text>
          <Text className="text-blue-600 font-semibold text-sm mt-2">Trending</Text>
          <Text className="text-blue-900 font-bold text-base mt-1">12 spots</Text>
        </View>
        <View className="flex-1 bg-green-50 rounded-xl p-4 items-center">
          <Text className="text-2xl">💾</Text>
          <Text className="text-green-600 font-semibold text-sm mt-2">Saved</Text>
          <Text className="text-green-900 font-bold text-base mt-1">8 places</Text>
        </View>
        <View className="flex-1 bg-purple-50 rounded-xl p-4 items-center">
          <Text className="text-2xl">📍</Text>
          <Text className="text-purple-600 font-semibold text-sm mt-2">Visited</Text>
          <Text className="text-purple-900 font-bold text-base mt-1">15 places</Text>
        </View>
      </View>

      {/* Personalized Section */}
      <View className="px-5 py-3">
        <Text className="text-lg font-bold text-black mb-4">Personalized for you</Text>
        
        {/* Map over places */}
        {placesData.map((place) => (
          <TouchableOpacity 
            key={place.id}
            onPress={() => navigation.navigate('detail', { place })}
            className="bg-white rounded-2xl p-4 mb-4 shadow-md"
          >
            <View className="flex-row gap-4">
              <Image 
                source={{ uri: place.image }}
                className="w-20 h-20 rounded-xl"
              />
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <View className="flex-1">
                    <Text className="text-base font-bold text-black">{place.name}</Text>
                    <Text className="text-xs text-gray-600 mt-0.5">{place.location}</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Text className="text-sm">⭐</Text>
                    <Text className="text-sm font-bold text-black">{place.rating}</Text>
                  </View>
                </View>
                <Text className="text-xs text-gray-600 mt-1.5 leading-4">{place.description}</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-3 mt-3">
              <View className={`${getTagBgColor(place.tagColor)} px-3 py-1.5 rounded-xl`}>
                <Text className={`text-xs font-semibold ${getTagTextColor(place.tagColor)}`}>
                  {place.tag}
                </Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <View className={`w-2 h-2 rounded-full ${getCrowdDotColor(place.crowdColor)}`} />
                <Text className="text-xs text-gray-600">{place.crowdLevel} crowd</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}


export default HomeScreen