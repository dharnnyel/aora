import React, { useState } from 'react';
import {
	StyledSafeAreaView,
	StyledScrollView,
	StyledText,
	StyledView,
} from '@/StyledComponents';
import { Button, FormField, Logo } from '@/components';
import { Link, router } from 'expo-router';
import { createUser } from '@/lib/appwrite';
import { Alert } from 'react-native';

type Props = {};

const SignUp = (props: Props) => {
	const [form, setForm] = useState<FormState>({
		email: '',
		password: '',
		username: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = async () => {
		if (!form.username || !form.password || !form.email) {
			Alert.alert('Error', 'Please fill in all the fields');
		}

		setIsSubmitting(true);

		try {
			const result = await createUser(form);

			// TODO: SET THE USER TO GLOBAL STATE TO REMAIN LOGGED IN WHEN THE EXIT THE APP

			router.replace('/home');
		} catch (error) {
			console.log('Error: ', (error as Error).message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<StyledSafeAreaView className='bg-primary h-full'>
			<StyledScrollView>
				<StyledView className='w-full justify-center h-[85vh] px-4 my-6'>
					<Logo />

					<StyledView className='mt-4'>
						<StyledText className='text-white font-popsemibold text-3xl'>
							Sign Up
						</StyledText>

						<FormField
							title='Username'
							value={form.username}
							handleChangeText={e =>
								setForm({ ...form, username: e })
							}
							placeholder='Your unique username'
							otherStyles='mt-10'
						/>
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

						{/* <StyledText className='text-gray-100 text-right mt-3 font-popregular text-sm'>
							Forgot password
						</StyledText> */}

						<Button
							title='Sign Up'
							containerStyles='my-6'
							handlePress={submit}
							isLoading={isSubmitting}
						/>

						<StyledText className='text-gray-100 text-sm font-popregular text-center'>
							Already have an account?{' '}
							<Link
								href='/sign-in'
								className='text-secondary font-popsemibold'
							>
								Login
							</Link>
						</StyledText>
					</StyledView>
				</StyledView>
			</StyledScrollView>
		</StyledSafeAreaView>
	);
};

export default SignUp;
