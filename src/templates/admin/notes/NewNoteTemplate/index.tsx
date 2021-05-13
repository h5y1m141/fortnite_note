import React, { useState } from 'react'
import { convertFromRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { Grid, Button } from '@material-ui/core'

type Props = {
  onSubmit: () => void
}

export const NewNoteTemplate: React.VFC<Props> = ({ onSubmit }) => {
  const initialData = convertFromRaw({
    entityMap: {},
    blocks: [],
  })
  const initialState = EditorState.createWithContent(initialData)
  const [editorState, setEditorState] = useState(initialState)
  const onChange = (value: EditorState) => {
    const newState = value

    setEditorState(newState)
  }

  return (
    <>
      <h3>NewNote</h3>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            登録する
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Editor editorState={editorState} onEditorStateChange={onChange} />
        </Grid>
      </Grid>
    </>
  )
}
