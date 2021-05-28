import firebase from '../../Firebase'
import { NoteContent, PageData, detectPageSummary } from '../models'

export const createNote = async (data: NoteContent, uid: string) => {
  const response = await firebase
    .firestore()
    .collection(`notes/${uid}/pages`)
    .add({
      title: 'test',
      note: data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  return response
}

export const createNoteTemplate = async (
  data: NoteContent,
  uid: string,
  title: string
) => {
  const response = await firebase
    .firestore()
    .collection(`notes/${uid}/note_templates`)
    .add({
      title: 'test',
      note: data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  return response
}

export const fetchNotes = async (uid: string) => {
  const noteReference = await firebase
    .firestore()
    .collection(`notes/${uid}/pages`)

  const snapshot = await noteReference.get()
  if (snapshot.empty) {
    return []
  }

  const notes = snapshot.docs.map((doc: any) => {
    const note = doc.data() as PageData
    return {
      ...note,
      id: doc.id,
      pageSummary: detectPageSummary(note.note),
    }
  })
  return notes
}
