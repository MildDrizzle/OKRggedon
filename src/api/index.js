import { db } from './firebase'

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
  }
}