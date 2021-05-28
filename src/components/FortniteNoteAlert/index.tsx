import React, { useState, useEffect, SyntheticEvent } from 'react'

import { Snackbar } from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert'

type Props = {
  isCreated: boolean
  isFailed: boolean
}

export const FortniteNoteAlert: React.VFC<Props> = ({
  isCreated,
  isFailed,
}) => {
  const [successOpen, setSuccessOpen] = useState(isCreated)
  const [failOpen, setFailOpen] = useState(isFailed)

  const handleClose = (event: SyntheticEvent<any, Event>, reason: any) => {
    setSuccessOpen(false)
    setFailOpen(false)
  }

  useEffect(() => {
    setSuccessOpen(isCreated)
    setFailOpen(isFailed)
  }, [isCreated, isFailed])

  return (
    <>
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled">
          登録完了！
        </MuiAlert>
      </Snackbar>
      <Snackbar open={failOpen} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity="error">
          登録失敗！
        </MuiAlert>
      </Snackbar>
    </>
  )
}
