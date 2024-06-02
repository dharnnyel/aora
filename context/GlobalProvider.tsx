import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { getCurrentUser } from '@/lib/appwrite';

type GlobalProviderProps = {
	children: React.ReactNode;
};

type GlobalContextType = {
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
	GlobalContextType | undefined
>(undefined);

export const useGlobalContext = (): GlobalContextType => {
	const context = useContext(GlobalContext);

	if (!context)
		throw new Error(
			'useGlobalContext must be used within a Provider'
		);

	return context;
};

const GlobalProvider: React.FC<GlobalProviderProps> = ({
	children,
}) => {
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
						$id: response.$id,
						accountId: response.accountId,
						email: response.email,
						username: response.username,
						avatar: response.avatar,
					});
				} else {
					setIsLoggedIn(false);
					setUser(null);
				}
			} catch (error) {
				console.log('Error fetching current user: ',error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUser();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				user,
				isLoggedIn,
				isLoading,
				setUser,
				setIsLoggedIn,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
