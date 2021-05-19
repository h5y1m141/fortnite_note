import { AppBar, Grid, Avatar, makeStyles, Toolbar } from '@material-ui/core'
import React, { useMemo } from 'react'

type Props = {
  pictureURL: string
}
export const Header: React.VFC<Props> = ({ pictureURL }) => {
  const classes = useStyles()
  const userPicture = useMemo(() => {
    return pictureURL
  }, [pictureURL])

  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item className={classes.avatar}>
              <Avatar alt="userPicture" src={userPicture} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
  },
  header: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  logoImage: {
    width: '50%',
    marginLeft: theme.spacing(4),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  uploadButton: {
    marginRight: theme.spacing(4),
  },
}))
