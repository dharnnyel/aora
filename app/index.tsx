import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
	return (
		<StyledView className='flex-1 items-center justify-center text-white border-4z border-red-500'>
			<StyledText className='text-3xl font-popblack'>Aora</StyledText>
			<StatusBar style='auto' />
			<Link
				href='/home'
				style={{ color: 'blue' }}
			>
				Go to Home
			</Link>
		</StyledView>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })
