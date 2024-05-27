import React, { useState } from 'react';
import {
	StyledSafeAreaView,
	StyledScrollView,
	StyledText,
	StyledView,
} from '@/StyledComponents';
import { Button, FormField, Logo } from '@/components';
import { Link } from 'expo-router';

type Props = {};

const SignIn = (props: Props) => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = () => {
		console.log('Form Submitted');
	};

	return (
		<StyledSafeAreaView className='bg-primary h-full'>
			<StyledScrollView>
				<StyledView className='w-full justify-center h-[85vh] px-4 my-6'>
					<Logo />

					<StyledView className='mt-4'>
						<StyledText className='text-white font-popsemibold text-3xl'>
							Sign In
						</StyledText>

						<FormField
							title='Email'
							value={form.email}
							handleChangeText={e =>
								setForm({ ...form, email: e })
							}
							otherStyles='mt-7'
							keyboardType='email-address'
						/>
						<FormField
							title='Password'
							value={form.password}
							handleChangeText={e =>
								setForm({
									...form,
									password: e,
								})
							}
							otherStyles='mt-7'
            />
            
            <StyledText className='text-gray-100 text-right mt-3 font-popregular text-sm'>Forgot password</StyledText>
            
						<Button
							title='Login'
							containerStyles='my-6'
							handlePress={submit}
							isLoading={isSubmitting}
						/>

						<StyledText className='text-gray-100 text-sm font-popregular text-center'>
							Don't have an account?{' '}
							<Link
								href='/sign-up'
								className='text-secondary font-popsemibold'
							>
								Sign up
							</Link>
						</StyledText>
					</StyledView>
				</StyledView>
			</StyledScrollView>
		</StyledSafeAreaView>
	);
};

export default SignIn;
