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

declare type SearchInputProps = {
	title: string;
	value: string;
	handleChangeText: (evt: string) => void;
	otherStyles?: string;
	keyboardType?: 'email-address' | 'password';
	placeholder?: string;
	placeholderTextColor?: string;
};

declare type Creator = {
	$collectionId: string;
	$createdAt: string;
	$databaseId: string;
	$id: string;
	$permissions: string[];
	$tenant: string;
	$updatedAt: string;
	accountId: string;
	avatar: string;
	email: string;
	username: string;
};

declare type VideoDocument = {
	$id: string;
	creator: Creator;
	prompt: string;
	thumbnail: string;
	title: string;
	video: string;
};

declare type Post = {
	title: string;
	prompt: string;
	thumbnail: string;
	video: string;
};

declare type TrendingVideosProps = {
	posts: VideoDocument[];
};

declare type FormState = {
	email: string;
	password: string;
	username?: string;
};

declare type User = {
	$id: string;
	accountId: string;
	email: string;
	username?: string;
	avatar?: string;
};

declare type FetchFunction<T> = () => Promise<T[]>;
