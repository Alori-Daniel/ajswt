import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: "com.adb.ajswt",
    projectId: "679d5fd0002787daf50c",
    databaseId: "679d61d20028027e89aa",
    userCollectionId: "679d620d0021dda03cb7",
    storageId: "679d639d003b9a3fd50f",
}


const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
    ;
const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);


export const createUser = async (email, password, username, number) => {

    try {
        const newAccount = await account.create(ID.unique(), email, password, username)

        if (!newAccount) throw Error;

        const avatarUrl = avatar.getInitials(username)

        await signIn(email, password)

        const newUser = await database.createDocument(config.databaseId, config.userCollectionId, ID.unique(), {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl,
            number
        })
        return newUser
    } catch (error) {
        throw new Error(error)
    }
}
export const signIn = async (email, password) => {

    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session

    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(config.databaseId, config.userCollectionId, [Query.equal('accountId', currentAccount.$id)])
        if (!currentUser) throw Error;

        return currentUser.documents[0]
    } catch (error) {
        console.log(error);
    }
}