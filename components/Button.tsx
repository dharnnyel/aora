import { View, Text } from 'react-native';
import React from 'react';
import {
	StyledText,
	StyledTouchableOpacity,
} from '@/StyledComponents';

const Button = ({
	title,
	containerStyles,
	handlePress,
	isLoading,
	textStyles,
}: ButtonProps) => {
	return (
		<StyledTouchableOpacity
			className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
				isLoading ? 'opacity-50' : ''
			}`}
			onPress={handlePress}
			activeOpacity={0.7}
			disabled={isLoading}
		>
			<StyledText
				className={`text-primary font-popsemibold text-lg ${textStyles}`}
			>
				{title}
			</StyledText>
		</StyledTouchableOpacity>
	);
};

export default Button;
