import  { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithRedirect, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getFirestore, query, where, getDocs, doc, setDoc, writeBatch } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCkv07LhofqMv3inSjlzl8PLBBe5xh8cAk",
    authDomain: "bel-clothing.firebaseapp.com",
    projectId: "bel-clothing",
    storageBucket: "bel-clothing.appspot.com",
    messagingSenderId: "673727886285",
    appId: "1:673727886285:web:e175bad16e673a39020a84",
    measurementId: "G-65WYCQL8FR"
};
//initialize firebase
const app = initializeApp(config);

//initialize firestore 
export const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = collection(db, "users");
    const userQuery = query(userRef,where("email","==",userAuth.email));
    const snapShot = await getDocs(userQuery);
 a
        if (snapShot.empty) {
            const createdAt = new Date();
            const { displayName, email } = userAuth;
            try {
                const docRef = await addDoc(userRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
    };
    return snapShot;
    
}
export const signInWithEmail = async (auth, email, password, displayName) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        const userRef = doc(db, 'users', user.uid);

        const createdAt = new Date();

        await setDoc(userRef, {
            displayName,
            email,
            createdAt,
        });
        console.log("Successfully signed in user:", userAuth.email);
    } catch (error) {
        console.error("Error signing in with email and password:", error);
    }
};

export const convertCollectionSnapshotToMap = (collectionsSnapShot) => {
    const transformedCollection = collectionsSnapShot.docs.map(docSnapshot => {
        const { title, items } = docSnapshot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    console.log(transformedCollection);
};

export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);
    objectsToAdd.forEach( obj => {
        const newDocRef = doc(collectionRef);
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

//preferred language
export const auth = getAuth();
auth.languageCode = 'it';

//authenticate with google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
    'prompt' : 'select_account'
});

//sign in with redirect
export const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
}

export default app;