import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';

import { images } from '@/constants';
import { Button, Logo } from '@/components';
import 'react-native-url-polyfill/auto';
import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import {
	Image,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
	const { isLoading, isLoggedIn } = useGlobalContext();

	if (!isLoading && isLoggedIn)
		return <Redirect href='/home' />;

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView
				contentContainerStyle={{ height: '100%' }}
			>
				<View className='items-center justify-center h-full px-4'>
					<Logo />

					<Image
						source={images.cards}
						resizeMode='contain'
						className='max-w-[380px] w-full h-[300px] border border-red-500'
					/>

					<View className='relative my-5'>
						<Text className='text-white text-center text-3xl font-popsemibold'>
							Discover Endless Possibilities with{' '}
							<Text className='text-secondary-200'>
								Aora
							</Text>{' '}
						</Text>
						<Image
							source={images.path}
							className='w-[60px] h-[20px] absolute right-1.5 -bottom-2'
							resizeMode='contain'
						/>
					</View>

					<Text className='text-gray-100 text-base font-popregular px-1'>
						Where Creativity Meets Innovation: Embark on a
						Journey of Limitless Exploration with Aora
					</Text>

					<Button
						containerStyles='w-full mt-7'
						handlePress={() => {
							router.push('/sign-in');
						}}
						title='Continue with Email'
					/>
				</View>
			</ScrollView>

			<StatusBar
				backgroundColor='#161622'
				style='light'
			/>
		</SafeAreaView>
	);
}
