import * as firebase from 'firebase'
import 'firebase/firestore'
import settings from './settings'

const app = firebase.initializeApp(settings)

export const auth = app.auth()
export const db = app.firestore()
export const PROVIDER = new firebase.auth.GoogleAuthProvider()

export default app
