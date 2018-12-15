import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
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

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ListingStack,
});
