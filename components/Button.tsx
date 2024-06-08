import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({
	title,
	containerStyles,
	handlePress,
	isLoading,
	textStyles,
}: ButtonProps) => {
	return (
		<TouchableOpacity
			className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
				isLoading ? 'opacity-50' : ''
			}`}
			onPress={handlePress}
			activeOpacity={0.7}
			disabled={isLoading}
		>
			<Text
				className={`text-primary font-popsemibold text-lg ${textStyles}`}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
