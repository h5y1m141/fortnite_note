import React from 'react'
import { NewNoteTemplate } from '../../../templates/admin/notes/NewNoteTemplate'
import { createNote } from '../../../domains/note/services'

export const NewNote: React.VFC = () => {
  const onSubmit = async (data: any) => {
    const note = await createNote(data)
    console.log(note)
    console.log('done')
  }

  return (
    <>
      <NewNoteTemplate onSubmit={onSubmit} />
    </>
  )
}
