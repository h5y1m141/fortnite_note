import React from 'react'
import { NewNoteTemplate } from '../../../templates/admin/notes/NewNoteTemplate'

export const NewNote: React.VFC = () => {
  const onSubmit = () => {
    console.log('create note')
  }

  return (
    <>
      <NewNoteTemplate onSubmit={onSubmit} />
    </>
  )
}
