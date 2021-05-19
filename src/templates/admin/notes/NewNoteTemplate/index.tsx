import React, { useState } from 'react'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Grid, Button, makeStyles, Box } from '@material-ui/core'

type Props = {
  onSubmit: (data: any) => void
}

export const NewNoteTemplate: React.VFC<Props> = ({ onSubmit }) => {
  const classes = useStyles()
  const initialData = convertFromRaw({
    entityMap: {},
    blocks: [],
  })
  const initialState = EditorState.createWithContent(initialData)
  const [editorState, setEditorState] = useState(initialState)
  const onChange = (value: EditorState) => {
    setEditorState(value)
  }
  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const rawEditorData = convertToRaw(editorState.getCurrentContent())
    onSubmit(rawEditorData)
  }

  return (
    <>
      <h3>新規ノート作成</h3>
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
