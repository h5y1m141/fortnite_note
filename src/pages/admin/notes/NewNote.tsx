import React from 'react'
import { NewNoteTemplate } from '../../../templates/admin/notes/NewNoteTemplate'
import { createNote } from '../../../domains/note/services'
import { NoteContent } from '../../../domains/note/models'
import { anonymousLogin } from '../../../domains/user/services'

export const NewNote: React.VFC = () => {
  const onSubmit = async (data: NoteContent) => {
    const response = await anonymousLogin()
    if (response && response.user) {
      const user = response.user
      const note = await createNote(data, user.uid)
      console.log(note)
      console.log('done')
    }
  }

  return (
    <>
      <NewNoteTemplate onSubmit={onSubmit} />
    </>
  )
}
