import React, { useState, useContext } from 'react'

type Props = {
  onSubmit: (data: any) => void
  isSensitivitySettingCreated: boolean
  isSensitivitySettingCreateionFailed: boolean
}
export const NewSensitivitySettingTemplate: React.VFC<Props> = ({
  onSubmit,
  isSensitivitySettingCreated,
  isSensitivitySettingCreateionFailed,
}) => {
  return (
    <>
      <p>NewSensitivitySettingTemplate</p>
    </>
  )
}
