import React from 'react';
import { Image } from 'react-native';
import { images } from '@/constants';

type Props = {};

const Logo = (props: Props) => {
	return (
		<Image
			source={images.logo}
			resizeMode='contain'
			className='w-[130px] h-[84px]'
		/>
	);
};

export default Logo;
