import { db, auth, PROVIDER } from './firebase'

// const users = db.collection('users')
const objectives = db.collection('objectives')

export default {
  getObjectivesByUser (userId) {
    objectives.where('user', '==', userId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, ' => ', doc.data())
        })
      })
      .catch(error => {
        console.error('Error getting documents: ', error)
      })
  },

  getCurrentUser () {
    return auth.currentUser
  },

  async signIn () {
    return await auth.signInWithPopup(PROVIDER)
  },

  logout () {
    return auth.signOut()
  }
}