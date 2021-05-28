import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Grid,
  Button,
  makeStyles,
  Input,
  Typography,
  Modal,
} from '@material-ui/core'

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
  buttonLabel: string
  onClickCreateTemplate: (data: any) => void
}

export const SimpleModal: React.VFC<Props> = ({
  buttonLabel,
  onClickCreateTemplate,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [modalStyle] = useState(detectModalStyle)
  const { handleSubmit } = useForm()
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = () => {
    if (title !== '') {
      onClickCreateTemplate(title)
    }
  }
  const handleInputChange = (event: any) => {
    setTitle(event.target.value)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography id="simple-modal-title" component="h5" variant="h5">
        テンプレート
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <Input value={title} onChange={handleInputChange} />
        <input type="submit" />
      </form>
      <Typography component="p">テンプレートとして登録する</Typography>
    </div>
  )
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
        {body}
      </Modal>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
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
