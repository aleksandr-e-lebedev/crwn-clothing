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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const getUserProfileReference = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  const createUserProfileDocument = async () => {
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
  };

  if (!userSnapshot.exists) createUserProfileDocument();

  // eslint-disable-next-line consistent-return
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectstoAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectstoAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return batch.commit();
};

export const convertCollectionsShapshotToMap = (collectionsShapshot) => {
  const transformedCollections = collectionsShapshot.docs.map((docShapshot) => {
    const { title, items } = docShapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docShapshot.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
