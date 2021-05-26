import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Slider } from '@material-ui/core'

type Props = {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  rangeType: 'normal' | 'magnification'
}
export const SensitivitySlider: React.VFC<Props> = ({
  value,
  setValue,
  rangeType,
}) => {
  const { control } = useForm()
  const handleSliderChange = (event: any, value: any) => {
    setValue(value)
  }
  const step = rangeType === 'normal' ? 1 : 0.1
  const max = rangeType === 'normal' ? 100 : 5.0
  return (
    <>
      <Controller
        name="lookHorizontalSpeed"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Slider
            value={typeof value === 'number' ? value : 0}
            aria-labelledby="input-slider"
            onChange={handleSliderChange}
            step={step}
            min={0}
            max={max}
          />
        )}
      />
    </>
  )
}
