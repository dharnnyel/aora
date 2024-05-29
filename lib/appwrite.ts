import {
	Account,
	AppwriteException,
	Avatars,
	Client,
	Databases,
	ID,
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

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

const isValidEmail = (email: string) => {
	// Regular expression for a simple email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const createUser = async (form: FormState) => {
	try {
		const { email, password, username } = form;

		const newAccount = await account.create(
			ID.unique(),
			email.trim(),
			password,
			username.trim()
		);

		console.log(newAccount.email);

		if (!newAccount) throw Error;

		const avatarUrl = avatars.getInitials(username);

		await signIn(email, password);

		const newUser = await databases.createDocument(
			config.databaseId,
			config.usersCollectionId,
			ID.unique(),
			{
				accountId: newAccount.$id,
				email: email.trim(),
				username: username.trim(),
				avatar: avatarUrl,
			}
		);
		return newUser;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

const signIn = async (email: string, password: string) => {
	try {
		const session =
			await account.createEmailPasswordSession(
				email,
				password
			);
		return session;
	} catch (error) {
		if (
			typeof error === 'string' ||
			typeof error === 'undefined'
		) {
			throw new Error(error);
		}
	}
};

export { createUser, signIn };
