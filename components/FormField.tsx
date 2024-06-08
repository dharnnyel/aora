import React, { useState } from 'react';
import {
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { icons } from '@/constants';

const FormField = ({
	title,
	value,
	handleChangeText,
	otherStyles,
	placeholder,
	placeholderTextColor,
}: FormFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className='text-base text-gray-100 font-popmedium'>
				{title}
			</Text>
			<View className='flex-row w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary-100 items-center'>
				<TextInput
					className='flex-1 w-full text-white font-popsemibold text-base'
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#7b7b8b'
					onChangeText={handleChangeText}
					secureTextEntry={
						title === 'Password' && !showPassword
					}
				/>
				{title === 'Password' && (
					<TouchableOpacity
						onPress={() => setShowPassword(!showPassword)}
					>
						<Image
							source={
								!showPassword ? icons.eye : icons.eyeHide
							}
							resizeMode='contain'
							className='w-6 h-6'
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FormField;
