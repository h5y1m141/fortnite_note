import React, { createContext, useState, useEffect } from 'react'
import { useCurrentUser, fetchUserProfile } from '../../domains/user/services'

export type UserState = {
  userID: string
  displayName: string
}

const initialState: UserState = {
  userID: '',
  displayName: '',
}

export const UserStateContext = createContext<
  [UserState, (state: UserState) => void]
>([initialState, () => {}])
export const UserProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<UserState>(initialState)
  const { userLoaded, userID } = useCurrentUser()

  useEffect(() => {
    async function fetchData() {
      if (userID) {
        const userProfile = await fetchUserProfile(`${userID}`)
        setState({
          userID,
          displayName: userProfile.displayName,
        })
      }
    }
    if (userLoaded && userID) {
      fetchData()
    }
  }, [setState, userID, userLoaded])

  if (state.userID === '') return <div>Loading....</div>

  return (
    <>
      <UserStateContext.Provider value={[state, setState]}>
        <div>{children}</div>
      </UserStateContext.Provider>
    </>
  )
}
