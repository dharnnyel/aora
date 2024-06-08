import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
	StyledImage,
	StyledText,
	StyledTextInput,
	StyledTouchableOpacity,
	StyledView,
} from '@/StyledComponents';
import { icons } from '@/constants';

const SearchInput = ({
	title,
	value,
	handleChangeText,
	otherStyles,
	placeholder,
	placeholderTextColor,
}: SearchInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<StyledView className='flex-row w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary-100 items-center space-x-4'>
			<StyledTextInput
				className='text-base mt-0.5 text-white flex-1 font-popregular'
				value={value}
				placeholder={placeholder}
				placeholderTextColor='#7b7b8b'
				onChangeText={handleChangeText}
				secureTextEntry={
					title === 'Password' && !showPassword
				}
			/>
			<StyledTouchableOpacity>
				<StyledImage
					source={icons.search}
					className='w-5 h-5'
					resizeMode='contain'
				/>
			</StyledTouchableOpacity>
		</StyledView>
	);
};

export default SearchInput;
