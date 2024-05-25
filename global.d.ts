declare module '*.png' {
	const value: import('react-native').ImageSourcePropType;
	export default value;
}

declare type TabIcon = {
	icon: ImageSourcePropType;
	color: string;
	name: string;
	focused: boolean;
};
