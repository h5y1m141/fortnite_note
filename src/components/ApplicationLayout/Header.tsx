import {
  AppBar,
  Avatar,
  Grid,
  makeStyles,
  Toolbar,
  Menu,
  MenuItem,
} from '@material-ui/core'
import React, { useState, useMemo, useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import firebase from '../../domains/Firebase'
import { UserStateContext } from '../../components/UserStateContext'

type Props = {
  pictureURL: string
}
export const Header: React.VFC<Props> = ({ pictureURL }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [isSignOut, setIsSignOut] = useState(false)
  const [, setState] = useContext(UserStateContext)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setState({
          userID: '',
          displayName: '',
        })
        setIsSignOut(true)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
  }
  const userPicture = useMemo(() => {
    return pictureURL
  }, [pictureURL])

  if (isSignOut) {
    return <Redirect to="/" />
  }
  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center" justify="flex-end">
            <Grid item className={classes.avatar}>
              <Avatar
                alt="userPicture"
                src={userPicture}
                onClick={handleClick}
              />

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/" onClick={handleClose}>
                  My account
                </MenuItem>
                <MenuItem onClick={signOut}>ログアウト</MenuItem>
              </Menu>
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
