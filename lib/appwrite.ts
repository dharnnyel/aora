import {
	Account,
	AppwriteException,
	Avatars,
	Client,
	Databases,
	ID,
	Query,
} from 'react-native-appwrite';

// Config for local appwrite setup using docker
// export const config = {
// 	endpoint: 'http://192.168.224.8/v1',
// 	platform: 'com.danny.aora',
// 	projectId: '6655c460000fc5ff9c68',
// 	databaseId: '6655c5f8000c5e3ec510',
// 	usersCollectionId: '6655c6120006a4f32b17',
// 	videosCollectionId: '6655c630002f2cc598db',
// 	storageId: '6655c7f60004e7d127e4',
// };

// Config for cloud appwrite setup
export const config = {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'com.danny.aora',
	projectId: '6654897b001d2401cbb8',
	databaseId: '66548cea00280ebe958f',
	usersCollectionId: '66548d59001cddef2c94',
	videosCollectionId: '66548d98001f0d7fcfe0',
	storageId: '6654922a002056efd331',
};

const client = new Client();

client
	.setEndpoint(config.endpoint)
	.setProject(config.projectId)
	.setPlatform(config.platform);

export const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

const createUser = async (
	form: FormState
): Promise<User> => {
	try {
		const { email, password, username } = form;

		console.log('Creating new Account');

		const newAccount = await account.create(
			ID.unique(),
			email.trim(),
			password,
			username?.trim()
		);

		console.log('New Account created');

		if (!newAccount)
			throw new Error('Account Creation failed');

		const avatarUrl = avatars
			.getInitials(username)
			.toString();

		console.log('Signing in new user...');
		await signIn(form);
		console.log('User signed in');

		const newUser = await databases.createDocument(
			config.databaseId,
			config.usersCollectionId,
			ID.unique(),
			{
				accountId: newAccount.$id,
				email: email.trim(),
				username: username?.trim(),
				avatar: avatarUrl,
			}
		);

		console.log('New user document created:', newUser);
		return {
			$id: newUser.$id,
			accountId: newAccount.$id,
			email: email.trim(),
			username: username?.trim(),
			avatar: avatarUrl,
		};
	} catch (error: any) {
		console.error('Error creating user:', error);
		throw new Error(error.message);
	}
};

const signIn = async (formData: FormState) => {
	try {
		const session =
			await account.createEmailPasswordSession(
				formData.email,
				formData.password
			);
		return session;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

const getCurrentUser = async (): Promise<User | null> => {
	try {
		const currentAccount = await account.get();

		if (!currentAccount) {
			console.log('No current account available');
			return null;
		}

		const currentUser = await databases.listDocuments(
			config.databaseId,
			config.usersCollectionId,
			[Query.equal('accountId', currentAccount.$id)]
		);

		if (currentUser.documents.length === 0) {
			console.log('No user found in database.');
			return null;
		}

		return currentUser.documents[0] as unknown as User;
		// return currentAccount;
	} catch (error: any) {
		console.log('Error getting current user: ', error);
		return null;
	}
};

export { createUser, signIn, getCurrentUser };
