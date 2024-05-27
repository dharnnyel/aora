import React from 'react';
import { StyledImage } from '@/StyledComponents';
import { images } from '@/constants';

type Props = {};

const Logo = (props: Props) => {
	return (
		<StyledImage
			source={images.logo}
			resizeMode='contain'
			className='w-[130px] h-[84px]'
		/>
	);
};

export default Logo;
