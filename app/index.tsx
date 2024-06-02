import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';

import {
	StyledImage,
	StyledSafeAreaView,
	StyledScrollView,
	StyledText,
	StyledView,
} from '@/StyledComponents';
import { images } from '@/constants';
import { Button, Logo } from '@/components';
import 'react-native-url-polyfill/auto';
import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
	const { isLoading, isLoggedIn } = useGlobalContext();

	if (!isLoading && isLoggedIn)
		return <Redirect href='/home' />;

	return (
		<StyledSafeAreaView className='bg-primary h-full'>
			<StyledScrollView
				contentContainerStyle={{ height: '100%' }}
			>
				<StyledView className='items-center justify-center h-full px-4'>
					<Logo />

					<StyledImage
						source={images.cards}
						resizeMode='contain'
						className='max-w-[380px] w-full h-[300px] border border-red-500'
					/>

					<StyledView className='relative my-5'>
						<StyledText className='text-white text-center text-3xl font-popsemibold'>
							Discover Endless Possibilities with{' '}
							<StyledText className='text-secondary-200'>
								Aora
							</StyledText>{' '}
						</StyledText>
						<StyledImage
							source={images.path}
							className='w-[60px] h-[20px] absolute right-1.5 -bottom-2'
							resizeMode='contain'
						/>
					</StyledView>

					<StyledText className='text-gray-100 text-base font-popregular px-1'>
						Where Creativity Meets Innovation: Embark on a
						Journey of Limitless Exploration with Aora
					</StyledText>

					<Button
						containerStyles='w-full mt-7'
						handlePress={() => {
							router.push('/sign-in');
						}}
						title='Continue with Email'
					/>
				</StyledView>
			</StyledScrollView>

			<StatusBar
				backgroundColor='#161622'
				style='light'
			/>
		</StyledSafeAreaView>
	);
}
