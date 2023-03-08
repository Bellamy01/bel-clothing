import  { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, collection } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCkv07LhofqMv3inSjlzl8PLBBe5xh8cAk",
    authDomain: "bel-clothing.firebaseapp.com",
    projectId: "bel-clothing",
    storageBucket: "bel-clothing.appspot.com",
    messagingSenderId: "673727886285",
    appId: "1:673727886285:web:e175bad16e673a39020a84",
    measurementId: "G-65WYCQL8FR"
};
//create user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc('users/f140914');
    const snapShot = await userRef.get(); 
    console.log();
} 

const app = initializeApp(config);

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
    signInWithPopup(auth, provider)
    }
export default app;