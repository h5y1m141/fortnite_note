import firebase from '../../Firebase'

export const anonymousLogin = async () => {
  const response = await firebase.auth().signInAnonymously()
  return response
}
