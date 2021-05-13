import firebase from '../../Firebase'

export type Note = {
  id?: string
  title: string
  content: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}
