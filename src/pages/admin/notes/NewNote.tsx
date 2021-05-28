import React, { useState, useContext } from 'react'
import { NewNoteTemplate } from '../../../templates/admin/notes/NewNoteTemplate'
import { createNote, createNoteTemplate } from '../../../domains/note/services'
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
  const onClickCreateTemplate = async (title: string, data: NoteContent) => {
    console.log(data)
    const noteTemplate = await createNoteTemplate(data, state.userID, title)
    console.log(noteTemplate)
    return noteTemplate
  }

  return (
    <>
      <NewNoteTemplate
        onSubmit={onSubmit}
        onClickCreateTemplate={onClickCreateTemplate}
        isNoteCreated={isNoteCreated}
        isNoteCreateionFailed={isNoteCreateionFailed}
      />
    </>
  )
}
