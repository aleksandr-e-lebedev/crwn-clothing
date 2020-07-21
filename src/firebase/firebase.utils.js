import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA5OphFIKkVHdGv69tNen_pJwYdIp0JBsU',
  authDomain: 'crwn-clothing-web-app.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-web-app.firebaseio.com',
  projectId: 'crwn-clothing-web-app',
  storageBucket: 'crwn-clothing-web-app.appspot.com',
  messagingSenderId: '950554869636',
  appId: '1:950554869636:web:abc2f8da731f71b59d27d1',
  measurementId: 'G-VC2EJN3VFR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error creating user', error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  return userRef;
};
