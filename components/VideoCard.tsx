import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';

type VideoCardProps = {
	video: VideoDocument;
};

const VideoCard: React.FC<VideoCardProps> = ({
	video: {
		title,
		thumbnail,
		video,
		creator: { username, avatar },
	},
}) => {
	const [play, setPlay] = useState(false);

	return (
		<View className='flex-col items-center px-4 mb-14'>
			<View className='flex-row gap-3 items-start'>
				<View className='justify-center items-center flex-row flex-1 gap-2'>
					<View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
						<Image
							source={{ uri: avatar }}
							className='w-full h-full rounded-lg'
							resizeMode='cover'
						/>
					</View>
					<View className='flex-1 gap-1'>
						<Text className='font-popsemibold text-white text-sm'>
							{title.length > 30
								? `${title.slice(0, 30)}...`
								: title}
						</Text>
						<Text className='font-popregular text-xs text-gray-100'>
							{username}
						</Text>
					</View>
				</View>

				<View className='pt-3'>
					<Image
						source={icons.menu}
						className='w-5 h-5'
						resizeMode='contain'
					/>
				</View>
			</View>

			{play ? (
				<Text className='text-wi'>Playing</Text>
			) : (
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => setPlay(true)}
					className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
				>
					<Image
						source={{ uri: thumbnail }}
						className='w-full h-full rounded-xl mt-3'
						resizeMode='cover'
					/>
					<Image
						source={icons.play}
						className='w-12 h-12 absolute'
						resizeMode='contain'
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default VideoCard;
