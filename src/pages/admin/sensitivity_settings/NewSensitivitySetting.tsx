import React, { useState, useContext } from 'react'
import { NewSensitivitySettingTemplate } from '../../../templates/admin/notes/NewSensitivitySettingTemplate'
import { createNote } from '../../../domains/note/services'
import { NoteContent } from '../../../domains/note/models'
import { UserStateContext } from '../../../components/UserStateContext'

export const NewSensitivitySetting: React.VFC = () => {
  const [isSensitivitySettingCreated, setIsSensitivitySettingCreated] =
    useState(false)
  const [
    isSensitivitySettingCreateionFailed,
    setIsSensitivitySettingCreateionFailed,
  ] = useState(false)
  const [state] = useContext(UserStateContext)
  const onSubmit = async (data: NoteContent) => {
    const note = await createNote(data, state.userID)
    note
      ? setIsSensitivitySettingCreated(true)
      : setIsSensitivitySettingCreateionFailed(true)
  }
  return (
    <>
      <NewSensitivitySettingTemplate
        onSubmit={onSubmit}
        isSensitivitySettingCreated={isSensitivitySettingCreated}
        isSensitivitySettingCreateionFailed={
          isSensitivitySettingCreateionFailed
        }
      />
    </>
  )
}
