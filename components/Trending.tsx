import {
	Text,
	FlatList,
	ImageBackground,
	TouchableOpacity,
	Image,
	ViewToken,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import * as Animatable from 'react-native-animatable';
import { icons } from '@/constants';
import {
	AVPlaybackStatus,
	ResizeMode,
	Video,
} from 'expo-av';

type TrendingItemProps = {
	activeItem: string;
	item: VideoDocument;
};

const zoomIn = {
	0: {
		transform: [{ scale: 0.9 }],
	},
	1: {
		transform: [{ scale: 1.1 }],
	},
};

const zoomOut = {
	0: {
		transform: [{ scale: 1 }],
	},
	1: {
		transform: [{ scale: 0.9 }],
	},
};

const TrendingItem: React.FC<TrendingItemProps> = ({
	activeItem,
	item,
}) => {
	const [play, setPlay] = useState(false);
	const videoRef = useRef<Video>(null);

	useEffect(() => {
		if (
			activeItem === item.$id &&
			play &&
			videoRef.current
		) {
			videoRef.current.playAsync();
		} else if (videoRef.current) {
			videoRef.current.stopAsync();
		}
	}, [play, activeItem]);

	const handlePress = () => {
		if (activeItem === item.$id) {
			setPlay(true);
			console.log(videoRef);
		}
	};

	return (
		<Animatable.View
			className='mr-5'
			animation={activeItem === item.$id ? zoomIn : zoomOut}
			duration={500}
		>
			{play ? (
				<Video
					ref={videoRef}
					source={{
						uri: `${item.video}`,
					}}
					className='w-52 h-72 rounded-[35px] mt-5 bg-white/10'
					resizeMode={ResizeMode.CONTAIN}
					useNativeControls
					shouldPlay
					isLooping
				/>
			) : (
				<TouchableOpacity
					className='relative justify-center items-center mt-5'
					activeOpacity={0.7}
					onPress={handlePress}
				>
					<ImageBackground
						source={{ uri: item.thumbnail }}
						className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
						resizeMode='cover'
					/>

					<Image
						source={icons.play}
						className='w-12 h-12 absolute'
						resizeMode='contain'
					/>
				</TouchableOpacity>
			)}
		</Animatable.View>
	);
};

const Trending: React.FC<TrendingVideosProps> = ({
	posts,
}) => {
	const [activeItem, setActiveItem] = useState<string>(
		posts[0]?.$id
	);

	useEffect(() => {
		if (posts.length > 0) {
			setActiveItem(posts[0].$id);
		}
	}, [posts]);

	const viewableItemsChanged = ({
		viewableItems,
	}: {
		viewableItems: Array<ViewToken<VideoDocument>>;
	}) => {
		if (viewableItems.length > 0 && viewableItems[0].item) {
			setActiveItem(viewableItems[0].item.$id);
		}
	};

	if (!posts || posts.length === 0) {
		return <Text>No New Posts</Text>;
	}

	return (
		<FlatList
			data={posts}
			keyExtractor={(item: VideoDocument) => item.$id}
			renderItem={({ item }) => {
				return (
					<TrendingItem
						activeItem={activeItem}
						item={item}
					/>
				);
			}}
			onViewableItemsChanged={viewableItemsChanged}
			viewabilityConfig={{
				itemVisiblePercentThreshold: 70,
			}}
			contentOffset={{ x: 0, y: 0 }}
			horizontal
		/>
	);
};

export default Trending;
