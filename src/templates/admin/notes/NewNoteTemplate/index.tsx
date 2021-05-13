import React, { useState } from 'react'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Grid, Button } from '@material-ui/core'

type Props = {
  onSubmit: (data: any) => void
}

export const NewNoteTemplate: React.VFC<Props> = ({ onSubmit }) => {
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
      <h3>NewNote</h3>
      <form onSubmit={onHandleSubmit}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              登録する
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Editor editorState={editorState} onEditorStateChange={onChange} />
          </Grid>
        </Grid>
      </form>
    </>
  )
}
