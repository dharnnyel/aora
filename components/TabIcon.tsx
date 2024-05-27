import { View, Text, Image } from 'react-native';
import React from 'react';
import {
	StyledImage,
	StyledText,
	StyledView,
} from '@/StyledComponents';

const TabIcon = ({
	color,
	focused,
	icon,
	name,
}: TabIconProps) => {
	return (
		<StyledView className='items-center justify-center gap-2'>
			<StyledImage
				source={icon}
				resizeMode='contain'
				tintColor={color}
				className='w-6 h-6'
			/>
			<StyledText
				className={`${
					focused ? 'font-popsemibold' : 'font-popregular'
				} text-xs`}
				style={{ color: color }}
			>
				{name}
			</StyledText>
		</StyledView>
	);
};

export default TabIcon;
