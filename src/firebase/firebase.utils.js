import  { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, where, query, doc } from 'firebase/firestore';

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
const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userQuery = query(collection(db,"users"),where("email","==",userAuth.email));
    const snapShot = await getDocs(userQuery);

        if (snapShot.empty) {
            const createdAt = new Date();
            const { displayName, email } = userAuth;
            try {
                const docRef = await addDoc(doc(collection(db, "users")), {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
                console.log("Document written with ID: ", docRef.id);
                return docRef;
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        
    };
    
}

//preferred language
export const auth = getAuth();
auth.languageCode = 'it';

//authenticate with google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
    'prompt' : 'select_account'
});

//sign in with popup
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
    }
export default app;