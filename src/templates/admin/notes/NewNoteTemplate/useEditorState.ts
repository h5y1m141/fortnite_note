import { useState } from 'react'
import { convertFromRaw, EditorState } from 'draft-js'

export const useEditorState = () => {
  const initialData = convertFromRaw({
    entityMap: {},
    blocks: [],
  })
  const initialState = EditorState.createWithContent(initialData)
  const [editorState, setEditorState] = useState(initialState)
  const onChange = (value: EditorState) => {
    setEditorState(value)
  }
  return {
    editorState,
    onChange,
  }
}
