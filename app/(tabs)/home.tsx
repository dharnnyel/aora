import React, { useState } from 'react';
import {
	FlatList,
	Image,
	ListRenderItem,
	RefreshControl,
	Text,
	View,
} from 'react-native';

import SearchInput from '@/components/SearchInput';
import EmptyState from '@/components/EmptyState';
import Trending from '@/components/Trending';
import { images } from '@/constants';
import useAppwrite from '@/lib/useAppwrite';
import {
	getAllPosts,
	getLatestPosts,
} from '@/lib/appwrite';
import { SafeAreaView } from 'react-native-safe-area-context';
import VideoCard from '@/components/VideoCard';

type Props = {};

const Item = ({ data }: { data: VideoDocument }) => {
	return <VideoCard video={data} />;
};

const Home = (props: Props) => {
	const {
		data: posts,
		isLoading,
		refetch,
	} = useAppwrite<VideoDocument>(getAllPosts);

	const { data: latestPosts } =
		useAppwrite<VideoDocument>(getLatestPosts);

	const [refreshing, setRefreshing] = useState(false);

	if (!posts.length) {
		return (
			<View>
				<Text>No posts available</Text>
			</View>
		);
	}

	const onRefresh = async () => {
		setRefreshing(true);
		await refetch();
		setRefreshing(false);
	};

	const renderItem: ListRenderItem<VideoDocument> = ({
		item,
	}) => {
		return <Item data={item} />;
	};

	return (
		<SafeAreaView className='bg-primary h-full'>
			<FlatList
				data={posts}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
				ListHeaderComponent={() => (
					<View className='my-6 px-4 space-y-6'>
						<View className='justify-between items-center flex-row mb-6'>
							<View>
								<Text className='font-popmedium text-sm text-gray-100'>
									Welcome back
								</Text>
								<Text className='text-2xl font-popsemibold text-white'>
									Daniel
								</Text>
							</View>

							<View className='mt-1.5'>
								<Image
									source={images.logoSmall}
									resizeMode='contain'
									className='w-10 h-10'
								/>
							</View>
						</View>

						<SearchInput
							handleChangeText={() => {}}
							title=''
							value=''
							placeholder='Search for a video topic'
						/>

						{/* Latest Videos */}
						<View className='w-full flex-1 pt-5 pb-8'>
							<Text className='font-popregular text-sm text-gray-100'>
								Trending Videos
							</Text>

							<Trending posts={latestPosts ?? []} />
						</View>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title='No Videos Found'
						subtitle='Be the first to create a video'
					/>
				)}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={['#FF9C01', '#FF9001']}
						progressBackgroundColor='#161622'
					/>
				}
			/>
		</SafeAreaView>
	);
};

export default Home;
