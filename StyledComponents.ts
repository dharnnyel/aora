import { styled } from 'nativewind';
import {
	Image,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	TextInput,
	FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledImage = styled(Image);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);
const StyledTextInput = styled(TextInput);
const StyledFlatList = styled(FlatList);

export {
	StyledFlatList,
	StyledImage,
	StyledSafeAreaView,
	StyledScrollView,
	StyledTouchableOpacity,
	StyledText,
	StyledTextInput,
	StyledView,
};
