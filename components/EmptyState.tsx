import React from 'react';
import { images } from '@/constants';
import Button from './Button';
import { router } from 'expo-router';
import { Image, Text, View } from 'react-native';

type EmptyStateProps = {
	title: string;
	subtitle: string;
};

const EmptyState = ({
	title,
	subtitle,
}: EmptyStateProps) => {
	return (
		<View className='justify-center items-center px-4'>
			<Image
				source={images.empty}
				className='w-[270px] h-[215px]'
				resizeMode='contain'
			/>
			<Text className='text-xl text-center mt-2 font-popsemibold text-white'>
				{title}
			</Text>
			<Text className='font-popmedium text-sm text-gray-100'>
				{subtitle}
			</Text>

			<Button
				title='Create Video'
				handlePress={() => router.push('/create')}
				containerStyles='w-full my-5'
			/>
		</View>
	);
};

export default EmptyState;
