import { View, Text } from 'react-native';
import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import { StyledText } from '@/StyledComponents';

type Props = {};

const Home = (props: Props) => {
	const { user } = useGlobalContext();

	return (
		<View>
			<StyledText className='text-black-200 font-bold'>
				
			</StyledText>
		</View>
	);
};

export default Home;
