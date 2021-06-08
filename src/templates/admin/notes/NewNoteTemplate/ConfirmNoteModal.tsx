import React, { useState, createRef, useEffect } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { makeStyles, Button, Modal } from '@material-ui/core'
import { useScreenshot } from 'use-react-screenshot'
import { storage } from '../../../../domains/Firebase'

const detectModalStyle = () => {
  const top = 10
  const left = 25

  return {
    top: `${top}%`,
    left: `${left}%`,
  }
}

type Props = {
  buttonLabel: string
  editorState: EditorState
  onClickCreateTemplate: (data: any) => void
}

export const ConfirmNoteModal: React.VFC<Props> = ({
  buttonLabel,
  editorState,
  onClickCreateTemplate,
}) => {
  const classes = useStyles()
  const [modalStyle] = useState(detectModalStyle)
  const [open, setOpen] = useState(false)
  const [image, takeScreenshot] = useScreenshot()
  const ref: any = createRef()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClick = async () => {
    console.log('handleclick')
    takeScreenshot(ref.current)
  }

  useEffect(() => {
    async function uploadImage() {
      if (image) {
        const storageReference = storage.ref()
        const uploadDirectoryStorageReference =
          storageReference.child('images/sample1.png')
        // NOTE: base64エンコードされた文字列をアップロードするには以下公式情報を参照
        // https://firebase.google.com/docs/storage/web/upload-files?hl=ja
        const response = await uploadDirectoryStorageReference.putString(
          image,
          'data_url'
        )
        console.log(response)
      }
    }
    uploadImage()
  }, [image])

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
          <div ref={ref}>
            <Editor
              readOnly
              toolbarHidden
              editorState={editorState}
              editorStyle={{
                border: '1px solid #cccccc',
                padding: '4px',
                minHeight: '200px',
              }}
            />
          </div>
          <Button onClick={handleClick}>登録する</Button>
        </div>
      </Modal>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
  },
}))
