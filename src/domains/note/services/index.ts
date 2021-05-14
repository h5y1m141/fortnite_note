import firebase from '../../Firebase'
import { NoteContent } from '../models'

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
