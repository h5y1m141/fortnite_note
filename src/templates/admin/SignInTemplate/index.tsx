import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'

type Props = {
  onSubmit: (data: any) => void
}
export const SignInTemplate: React.VFC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm()
  return (
    <>
      <Grid>
        <h3>sign in</h3>
        <Button onClick={onSubmit}>Twitterログイン</Button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="h5y1m141" {...register('twitterID')} />
          <input type="submit" />
        </form>
      </Grid>
    </>
  )
}
