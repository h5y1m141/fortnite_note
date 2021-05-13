import firebase from '../../Firebase'
import { Note } from '../models'

export const createNote = async (data: any) => {
  const response = await firebase.firestore().collection('notes').add({
    title: 'test',
    note: data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  return response
}
