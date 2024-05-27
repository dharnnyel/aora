declare module '*.png' {
	const value: import('react-native').ImageSourcePropType;
	export default value;
}

declare type TabIconProps = {
	icon: ImageSourcePropType;
	color: string;
	name: string;
	focused: boolean;
};

declare type ButtonProps = {
	title: string;
	handlePress: () => void;
	containerStyles: string;
	textStyles?: string;
	isLoading?: boolean;
};

declare type FormFieldProps = {
	title: string;
	value: string;
	handleChangeText: (evt: string) => void;
	otherStyles?: string;
	keyboardType?: 'email-address' | 'password';
	placeholder?: string;
	placeholderTextColor?: string;
};
