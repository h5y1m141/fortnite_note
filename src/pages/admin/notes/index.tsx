import React, { useState, useEffect, useContext } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { NoteListTemplate } from '../../../templates/admin/notes/NoteListTemplate'
import { fetchNotes } from '../../../domains/note/services'
import { PageData } from '../../../domains/note/models'
import { UserStateContext } from '../../../components/UserStateContext'

export const NoteList: React.VFC = () => {
  const initialNotes: PageData[] = []
  const [state] = useContext(UserStateContext)
  const [notes, setNotes] = useState(initialNotes)

  useEffect(() => {
    async function fetchData() {
      const notes = await fetchNotes(state.userID)
      setNotes(notes)
    }
    fetchData()
  }, [])

  if (notes.length === 0)
    return (
      <>
        <CircularProgress size={24} />
      </>
    )
  return (
    <>
      <NoteListTemplate notes={notes} />
    </>
  )
}
