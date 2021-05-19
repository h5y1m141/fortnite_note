import firebase from '../../Firebase'

export type User = {
  uid: string
}

export type UserProfile = {
  displayName: string
  type: 'twitter' | 'email'
  twitterID: string
  createdDate: firebase.firestore.FieldValue
  email?: string
  photoURL?: string
}
