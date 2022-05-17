import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQ2XY2jz89HEVX55-Sqi0g8YT3Z8YVPa8',
  authDomain: 'house-marketplace-app-7b880.firebaseapp.com',
  projectId: 'house-marketplace-app-7b880',
  storageBucket: 'house-marketplace-app-7b880.appspot.com',
  messagingSenderId: '569807297104',
  appId: '1:569807297104:web:69de365fa0df96daaa0f55',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
