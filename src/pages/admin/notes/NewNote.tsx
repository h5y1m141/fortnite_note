import React, { useState, useContext, useEffect } from 'react'
import { NewNoteTemplate } from '../../../templates/admin/notes/NewNoteTemplate'
import { createNote, createNoteTemplate } from '../../../domains/note/services'
import { NoteContent, PageData } from '../../../domains/note/models'
import { fetchNoteTemplates } from '../../../domains/note/services'
import { UserStateContext } from '../../../components/UserStateContext'

export const NewNote: React.VFC = () => {
  const initialNotes: PageData[] = []
  const [isNoteCreated, setIsNoteCreated] = useState(false)
  const [isNoteCreateionFailed, setIsNoteCreateionFailed] = useState(false)
  const [noteTemplates, setNoteTemplates] = useState(initialNotes)
  const [state] = useContext(UserStateContext)

  useEffect(() => {
    async function fetchData() {
      const noteTemplates = await fetchNoteTemplates(state.userID)
      setNoteTemplates(noteTemplates)
    }
    fetchData()
  }, [])

  const onSubmit = async (data: NoteContent) => {
    const note = await createNote(data, state.userID)
    note ? setIsNoteCreated(true) : setIsNoteCreateionFailed(true)
  }
  const onClickCreateTemplate = async (title: string, data: NoteContent) => {
    const noteTemplate = await createNoteTemplate(data, state.userID, title)
    return noteTemplate
  }

  return (
    <>
      <NewNoteTemplate
        noteTemplates={noteTemplates}
        onSubmit={onSubmit}
        onClickCreateTemplate={onClickCreateTemplate}
        isNoteCreated={isNoteCreated}
        isNoteCreateionFailed={isNoteCreateionFailed}
      />
    </>
  )
}
