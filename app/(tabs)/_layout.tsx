import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { TabIcon } from '@/components';
import { icons } from '@/constants';

type Props = {};

const TabsLayout = (props: Props) => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: '#FFA001',
					tabBarInactiveTintColor: '#CDCDE0',
					tabBarStyle: {
						backgroundColor: '#161622',
						borderTopWidth: 1,
						borderTopColor: '#232533',
						height: 63
					},
				}}
			>
				<Tabs.Screen
					name='home'
					options={{
						title: 'Home',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								icon={icons.home}
								name='Home'
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='bookmark'
					options={{
						title: 'Bookmark',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								icon={icons.bookmark}
								name='Bookmark'
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='create'
					options={{
						title: 'Create',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								icon={icons.plus}
								name='Create'
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='profile'
					options={{
						title: 'Profile',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								color={color}
								focused={focused}
								icon={icons.profile}
								name='Profile'
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
