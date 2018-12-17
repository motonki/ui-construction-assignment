import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListingScreen from '../screens/ListingScreen';
import ReviewScreen from '../screens/ReviewScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Review: ReviewScreen
});

 

HomeStack.navigationOptions = {
  tabBarLabel: 'Form',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'form'}
    />
  ),
};

const ListingStack = createStackNavigator({
  Listing: ListingScreen,
  Home: HomeScreen,
  Review: ReviewScreen
});

ListingStack.navigationOptions = {
  tabBarLabel: 'Status',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'eye'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ListingStack,
});