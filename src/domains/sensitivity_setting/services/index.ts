import firebase from '../../Firebase'
import { SensitivitySetting } from '../models'

export const createSensitivitySetting = async (
  data: SensitivitySetting,
  uid: string
) => {
  const params = {
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  }
  const response = await firebase
    .firestore()
    .collection(`sensitivity_settings/${uid}/details`)
    .add(params)
  return response
}
