import React, { useContext } from 'react'
import { Drawer, ListItem, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { UserStateContext } from '../../components/UserStateContext'

type Props = {
  children: React.ReactNode
}

export const ApplicationLayout: React.VFC<Props> = ({ children }) => {
  const [state] = useContext(UserStateContext)
  const classes = useStyles()
  return (
    <div>
      <Header pictureURL={state.photoURL} />
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.drawer}>
          <Link className={classes.link} to="/admin/notes/list">
            <ListItem button>ノート一覧</ListItem>
          </Link>
          <Link className={classes.link} to="/admin/notes/new">
            <ListItem button>ノートを作成</ListItem>
          </Link>
          <Link
            className={classes.link}
            to="/admin/sensitivity_setting_notes/new"
          >
            <ListItem button>感度を記録</ListItem>
          </Link>
        </div>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    marginTop: theme.spacing(10),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(20),
  },
  link: {
    textDecoration: 'none',
  },
}))
