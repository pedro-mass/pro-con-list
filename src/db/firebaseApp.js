import Firebase from 'firebase';
import firebase_config from './firebase_config';
let firebaseApp = Firebase.initializeApp(firebase_config);

export default {
  database: firebaseApp.database,
}
