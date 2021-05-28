import React, { useState, useContext } from 'react'
import { NewSensitivitySettingTemplate } from '../../../templates/admin/notes/NewSensitivitySettingTemplate'

import { UserStateContext } from '../../../components/UserStateContext'
import { createSensitivitySetting } from '../../../domains/sensitivity_setting/services'
export const NewSensitivitySetting: React.VFC = () => {
  const [isSensitivitySettingCreated, setIsSensitivitySettingCreated] =
    useState(false)
  const [
    isSensitivitySettingCreateionFailed,
    setIsSensitivitySettingCreateionFailed,
  ] = useState(false)
  const [state] = useContext(UserStateContext)

  const onSubmit = async (data: any) => {
    const sensitivitySetting = await createSensitivitySetting(
      data,
      state.userID
    )
    sensitivitySetting
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
