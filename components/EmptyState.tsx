import React from 'react';
import {
	StyledImage,
	StyledText,
	StyledView,
} from '@/StyledComponents';
import { images } from '@/constants';
import Button from './Button';
import { router } from 'expo-router';

type EmptyStateProps = {
	title: string;
	subtitle: string;
};

const EmptyState = ({
	title,
	subtitle,
}: EmptyStateProps) => {
	return (
		<StyledView className='justify-center items-center px-4'>
			<StyledImage
				source={images.empty}
				className='w-[270px] h-[215px]'
				resizeMode='contain'
			/>
			<StyledText className='text-xl text-center mt-2 font-popsemibold text-white'>
				{title}
			</StyledText>
			<StyledText className='font-popmedium text-sm text-gray-100'>
				{subtitle}
			</StyledText>

			<Button
				title='Create Video'
				handlePress={() => router.push('/create')}
				containerStyles='w-full my-5'
			/>
		</StyledView>
	);
};

export default EmptyState;
