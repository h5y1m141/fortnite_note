import React, { useState, useContext } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Input, TextField } from '@material-ui/core'

type Props = {
  onSubmit: (data: any) => void
  isSensitivitySettingCreated: boolean
  isSensitivitySettingCreateionFailed: boolean
}
type Inputs = {
  buildModeSensitivity: number // 建築感度
  editModeSensitivity: number // 編集感度
  lookHorizontalSpeed: number //水平感度
  lookVerticalSpeed: number //垂直感度
  turningHorizontalBoost: number // 水平ブースト
  turningVerticalBoost: number // 垂直ブースト
  adsLookHorizontalSpeed: number //ADS水平感度
  adsLookVerticalSpeed: number //ADS垂直感度
  adsTurningHorizontalBoost: number // ADS水平ブースト
  adsTurningVerticalBoost: number // ADS垂直ブースト
}
export const NewSensitivitySettingTemplate: React.VFC<Props> = ({
  onSubmit,
  isSensitivitySettingCreated,
  isSensitivitySettingCreateionFailed,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  return (
    <>
      <p>NewSensitivitySettingTemplate</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('buildModeSensitivity', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.buildModeSensitivity && <span>必須項目です</span>}
        <Controller
          name="editModeSensitivity"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} />}
        />
        <Input type="submit" />
      </form>
    </>
  )
}
