import React, { useState, useContext } from 'react'
import { NewNoteTemplate } from '../../../templates/admin/notes/NewNoteTemplate'
import { createNote } from '../../../domains/note/services'
import { NoteContent } from '../../../domains/note/models'
import { UserStateContext } from '../../../components/UserStateContext'

export const NewNote: React.VFC = () => {
  const [isNoteCreated, setIsNoteCreated] = useState(false)
  const [isNoteCreateionFailed, setIsNoteCreateionFailed] = useState(false)
  const [state] = useContext(UserStateContext)
  const onSubmit = async (data: NoteContent) => {
    const note = await createNote(data, state.userID)
    note ? setIsNoteCreated(true) : setIsNoteCreateionFailed(true)
  }

  return (
    <>
      <NewNoteTemplate
        onSubmit={onSubmit}
        isNoteCreated={isNoteCreated}
        isNoteCreateionFailed={isNoteCreateionFailed}
      />
    </>
  )
}
