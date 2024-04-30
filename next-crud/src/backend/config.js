import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
	apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: NEXT_PUBLIC_FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export default firebase