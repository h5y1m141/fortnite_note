import React, { useState, useContext } from 'react'
import { NewSensitivitySettingTemplate } from '../../../templates/admin/notes/NewSensitivitySettingTemplate'

import { UserStateContext } from '../../../components/UserStateContext'

export const NewSensitivitySetting: React.VFC = () => {
  const [isSensitivitySettingCreated, setIsSensitivitySettingCreated] =
    useState(false)
  const [
    isSensitivitySettingCreateionFailed,
    setIsSensitivitySettingCreateionFailed,
  ] = useState(false)
  const [state] = useContext(UserStateContext)

  const onSubmit = async (data: any) => {
    console.log(data)
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
