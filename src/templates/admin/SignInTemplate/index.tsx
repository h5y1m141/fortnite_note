import React from 'react'
import { Grid, Button } from '@material-ui/core'

type Props = {
  onSubmit: (data: any) => void
}
export const SignInTemplate: React.VFC<Props> = ({ onSubmit }) => {
  return (
    <>
      <Grid>
        <h3>sign in</h3>
        <Button variant="contained" onClick={onSubmit} color="primary">
          Twitterログイン
        </Button>
      </Grid>
    </>
  )
}
