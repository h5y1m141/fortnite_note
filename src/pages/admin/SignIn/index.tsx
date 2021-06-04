import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { SignInTemplate } from '../../../templates/admin/SignInTemplate'
import {
  loginWithTwitterAccount,
  createUserProfile,
} from '../../../domains/user/services'
import { UserProfile } from '../../../domains/user/models'
import firebase from '../../../domains/Firebase'
import { UserStateContext } from '../../../components/UserStateContext'

export const SignIn: React.VFC = () => {
  const [, setState] = useContext(UserStateContext)
  const [isSignIn, setIsSignIn] = useState(false)
  const onSubmit = async () => {
    const resopnse = await loginWithTwitterAccount()
    if (resopnse.user) {
      const userProfile = resopnse.user.providerData.map((item) => {
        return item
      })[0]
      if (userProfile) {
        const params: UserProfile = {
          email: userProfile.email || '',
          displayName: userProfile.displayName || '',
          photoURL: userProfile.photoURL || '',
          type: 'twitter',
          twitterID: userProfile.uid || '',
          createdDate: firebase.firestore.FieldValue.serverTimestamp(),
        }
        await createUserProfile(params, resopnse.user.uid)
        setState({
          userID: userProfile.uid,
          displayName: userProfile.displayName || '',
          photoURL: userProfile.photoURL || '',
        })
        setIsSignIn(true)
      }
    }
  }

  if (isSignIn) {
    return <Redirect to="/admin/notes/new" />
  }

  return (
    <>
      <SignInTemplate onSubmit={onSubmit} />
    </>
  )
}
