import React from 'react'

import { Input } from '@material-ui/core'

type Props = {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  rangeType: 'normal' | 'magnification'
}
export const SensitivityInput: React.VFC<Props> = ({
  value,
  setValue,
  rangeType,
}) => {
  const handleBlur = () => {
    if (value < 0) {
      rangeType === 'normal' ? setValue(0) : setValue(0)
    } else if (value > 100) {
      rangeType === 'normal' ? setValue(100) : setValue(5)
    }
  }
  const handleInputChange = (event: any) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value))
  }
  const inputProps =
    rangeType === 'normal'
      ? {
          step: 1,
          min: 0,
          max: 100,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }
      : {
          step: 0.1,
          min: 0,
          max: 5,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }
  return (
    <>
      <Input
        value={value}
        margin="dense"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={inputProps}
      />
    </>
  )
}
