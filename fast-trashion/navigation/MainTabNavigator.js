import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import MaterialInputScreen from '../screens/MaterialInput';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {}
});

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	)
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
	{
		Links: LinksScreen
	},
	config
);

LinksStack.navigationOptions = {
	tabBarLabel: 'Links',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
		/>
	)
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
		/>
	)
};

SettingsStack.path = '';

// Material Input

const MaterialInputStack = createStackNavigator(
	{
		MaterialInput: MaterialInputScreen
	},
	config
);

MaterialInputStack.navigationOptions = {
	tabBarLabel: 'Materials',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="input" />
};

MaterialInputStack.path = '';

// Stats

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	MaterialInputStack
});

tabNavigator.path = '';

export default tabNavigator;
