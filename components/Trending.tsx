import { Text, FlatList } from 'react-native';
import React from 'react';

const Trending: React.FC<TrendingVideosProps> = ({
	posts,
}) => {
	return (
		<FlatList
			data={posts}
			keyExtractor={(item: unknown) =>
				(item as VideoDocument).$id!
			}
			renderItem={({ item }) => (
				<Text className='text-3xl text-white'>
					{(item as VideoDocument).title}
				</Text>
			)}
			horizontal
		/>
	);
};

export default Trending;
