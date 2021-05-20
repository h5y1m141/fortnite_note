import React, { useState, SyntheticEvent, useEffect } from 'react'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {
  Grid,
  Button,
  makeStyles,
  Box,
  Snackbar,
  Typography,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

type Props = {
  onSubmit: (data: any) => void
  isNoteCreated: boolean
  isNoteCreateionFailed: boolean
}

export const NewNoteTemplate: React.VFC<Props> = ({
  onSubmit,
  isNoteCreated,
  isNoteCreateionFailed,
}) => {
  const classes = useStyles()
  const initialData = convertFromRaw({
    entityMap: {},
    blocks: [],
  })
  const initialState = EditorState.createWithContent(initialData)
  const [editorState, setEditorState] = useState(initialState)
  const [successOpen, setSuccessOpen] = useState(isNoteCreated)
  const [failOpen, setFailOpen] = useState(isNoteCreateionFailed)

  const onChange = (value: EditorState) => {
    setEditorState(value)
  }
  const handleClose = (event: SyntheticEvent<any, Event>, reason: any) => {
    setSuccessOpen(false)
    setFailOpen(false)
  }
  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const rawEditorData = convertToRaw(editorState.getCurrentContent())
    onSubmit(rawEditorData)
  }

  useEffect(() => {
    setSuccessOpen(isNoteCreated)
    setFailOpen(isNoteCreateionFailed)
  }, [isNoteCreated, isNoteCreateionFailed])

  return (
    <>
      <Typography component="h3" variant="h3">
        新規ノート作成
      </Typography>
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
      <Box p={1}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Grid item>
            <Button variant="contained" color={'secondary'}>
              テンプレートを登録
            </Button>
          </Grid>
          <Grid item>
            <Box p={1} />
          </Grid>
          <Grid item>
            <Button variant="contained" color={'secondary'}>
              テンプレートを呼び出す
            </Button>
          </Grid>
        </Grid>
      </Box>
      <form onSubmit={onHandleSubmit}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <div className={classes.editorContainer}>
              <Editor
                editorState={editorState}
                onEditorStateChange={onChange}
                editorStyle={{
                  border: '1px solid #cccccc',
                  padding: '4px',
                  minHeight: '200px',
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" color="primary">
              登録する
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    padding: theme.spacing(2),
    border: '1px solid #999999',
  },
}))
