import { useState, useEffect } from 'react'
import firebase from '../../Firebase'
import { UserProfile } from '../models'

export const anonymousLogin = async () => {
  const response = await firebase.auth().signInAnonymously()
  return response
}

export const loginWithTwitterAccount = async () => {
  const provider = new firebase.auth.TwitterAuthProvider()
  provider.setCustomParameters({
    lang: 'jp',
  })
  firebase.auth().languageCode = 'jp'

  const response = await firebase.auth().signInWithPopup(provider)
  return response
}

export function useCurrentUser() {
  const [userLoaded, setLoading] = useState(false)
  const [userID, setUserID] = useState('')

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUserID(user.uid)
      }
      setLoading(true)
    })
  }, [])
  return { userLoaded, userID }
}

export const createUserProfile = async (values: UserProfile, uid: string) => {
  const { email, displayName, photoURL, type, twitterID, createdDate } = values
  await firebase.firestore().collection(`user_profiles`).doc(uid).set({
    email,
    displayName,
    photoURL,
    type,
    twitterID,
    createdDate,
  })
}

export const fetchUserProfile = async (uid: string) => {
  const userProfileReference = await firebase
    .firestore()
    .collection(`user_profiles`)
    .doc(uid)
  const snapshot = await userProfileReference.get()
  const data = snapshot.data() as UserProfile
  return data
}
