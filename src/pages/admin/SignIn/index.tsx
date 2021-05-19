import React from 'react'
import { SignInTemplate } from '../../../templates/admin/SignInTemplate'
import {
  loginWithTwitterAccount,
  createUserProfile,
} from '../../../domains/user/services'
import { UserProfile } from '../../../domains/user/models'
import firebase from '../../../domains/Firebase'

export const SignIn: React.VFC = () => {
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
        console.log(userProfile)
      }
    }
  }

  return (
    <>
      <SignInTemplate onSubmit={onSubmit} />
    </>
  )
}
