import React, { useState } from 'react'
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  Button,
  Modal,
} from '@material-ui/core'

import { PageData } from '../../../../domains/note/models'

const detectModalStyle = () => {
  const top = 10
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

type Props = {
  noteTemplates: PageData[]
  buttonLabel: string
  onClick: (data: any) => void
}

export const FetchTemplateModal: React.VFC<Props> = ({
  noteTemplates,
  buttonLabel,
  onClick,
}) => {
  const classes = useStyles()
  const [modalStyle] = useState(detectModalStyle)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const onHandleClose = (data: any) => {
    onClick(data)
    handleClose()
  }

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        {buttonLabel}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography id="simple-modal-title" component="h5" variant="h5">
            登録済のテンプレート一覧
          </Typography>
          <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
              {noteTemplates.map((noteTemplate) => {
                return (
                  <ListItem
                    button
                    data-id={noteTemplate.id}
                    key={noteTemplate.id}
                    onClick={onHandleClose}
                  >
                    {noteTemplate.title}
                  </ListItem>
                )
              })}
            </List>
          </div>
        </div>
      </Modal>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    position: 'absolute',
    width: 400,
    minHeight: 200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
