// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEcmzz0qoCTPXLcmV5b9ikBO67QVd0nQ8',
  authDomain: 'api-project-172493409834.firebaseapp.com',
  databaseURL:
    'https://api-project-172493409834-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'api-project-172493409834',
  storageBucket: 'api-project-172493409834.appspot.com',
  messagingSenderId: '172493409834',
  appId: '1:172493409834:web:d464e73f3abb27387fbd53',
  measurementId: 'G-S1EX7EEJT2',
};

// Initialize Firebase

export async function firebaseDB() {
  const app = initializeApp(firebaseConfig);
  const defaultProject = initializeApp(firebaseConfig);
  let analytics;
  const database = getDatabase(app);
  const list = ref(database, 'data');
  let data;

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  onValue(list, (snapshot) => {
    data = snapshot.val();
  });

  return {
    defaultProject,
    app,
    analytics,
    list,
    data,
  };
}
