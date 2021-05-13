import firebase from '../../Firebase'
import { NoteContent } from '../models'

export const createNote = async (data: NoteContent) => {
  const response = await firebase.firestore().collection('notes').add({
    title: 'test',
    note: data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  return response
}
