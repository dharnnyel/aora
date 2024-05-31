import { getCurrentUser } from '@/lib/appwrite';
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

type GlobalProviderProps = {
	children: React.ReactNode;
};

// value={{
// 				isLoggedIn,
// 				setIsLoggedIn,
// 				user,
// 				setUser,
// 				isLoading,
// 			}}

type UserContext = {
	user: User | null;
	isLoggedIn: boolean;
	isLoading: boolean;
	setUser: React.Dispatch<
		React.SetStateAction<User | null>
	>;
	setIsLoggedIn: React.Dispatch<
		React.SetStateAction<boolean>
	>;
};

const GlobalContext = createContext<
	UserContext | undefined
>(undefined);

export const useGlobalContext = () =>
	useContext(GlobalContext);

const GlobalProvider = ({
	children,
}: GlobalProviderProps) => {
	// TODO: Check the type of the user returned from appwrite and set it in the user state.

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await getCurrentUser();
				if (response) {
					setIsLoggedIn(true);
					setUser({
						accountId: response.$id || '',
						email: response.email || '',
						username: response.username || '',
						avatar: response.avatarUrl || '',
					});
				} else {
					setIsLoggedIn(false);
					setUser(null);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUser();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				user,
				setUser,
				isLoading,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
