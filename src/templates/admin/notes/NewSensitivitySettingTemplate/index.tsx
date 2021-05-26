import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Typography, Box, Button, Grid, makeStyles } from '@material-ui/core'
import { SensitivityInput } from './SensitivityInput'
import { SensitivitySlider } from './SensitivitySlider'
import { SensitivitySetting } from '../../../../domains/sensitivity_setting/models'
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
  const { control, handleSubmit } = useForm<Inputs>()
  const [buildModeSensitivity, setBuildModeSensitivity] = useState(1.0)
  const [editModeSensitivity, setEditModeSensitivity] = useState(1.0)
  const [lookHorizontalSpeed, setLookHorizontalSpeed] = useState(20)
  const [lookVerticalSpeed, setLookVerticalSpeed] = useState(20)
  const [turningHorizontalBoost, setTurningHorizontalBoost] = useState(1.0)
  const [turningVerticalBoost, setTurningVerticalBoost] = useState(1.0)
  const [adsLookHorizontalSpeed, setAdsLookHorizontalSpeed] = useState(20)
  const [adsLookVerticalSpeed, setAdsLookVerticalSpeed] = useState(20)
  const [adsTurningHorizontalBoost, setAdsTurningHorizontalBoost] =
    useState(1.0)
  const [adsTurningVerticalBoost, setAdsTurningVerticalBoost] = useState(1.0)
  const classes = useStyles()

  // MaterialUIのスライダーとTextFieldどちらかを利用してuseStateに設定した変数に値が格納
  // されるロジックにしてるため、一度このメソッドでフォームに送信する値を設定する必要ある
  const sendData = () => {
    const data: SensitivitySetting = {
      buildModeSensitivity,
      editModeSensitivity,
      lookHorizontalSpeed,
      lookVerticalSpeed,
      turningHorizontalBoost,
      turningVerticalBoost,
      adsLookHorizontalSpeed,
      adsLookVerticalSpeed,
      adsTurningHorizontalBoost,
      adsTurningVerticalBoost,
    }
    onSubmit(data)
  }

  return (
    <>
      <Typography component="h3" variant="h3">
        感度設定メモ
      </Typography>
      <form onSubmit={handleSubmit(sendData)}>
        <Box p={2}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                建築感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="buildModeSensitivity"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={buildModeSensitivity}
                    setValue={setBuildModeSensitivity}
                    rangeType="magnification"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={buildModeSensitivity}
                  setValue={setBuildModeSensitivity}
                  rangeType="magnification"
                />
                倍
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                編集感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="editModeSensitivity"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={editModeSensitivity}
                    setValue={setEditModeSensitivity}
                    rangeType="magnification"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={editModeSensitivity}
                  setValue={setEditModeSensitivity}
                  rangeType="magnification"
                />
                倍
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                水平感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="lookHorizontalSpeed"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={lookHorizontalSpeed}
                    setValue={setLookHorizontalSpeed}
                    rangeType="normal"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={lookHorizontalSpeed}
                  setValue={setLookHorizontalSpeed}
                  rangeType="normal"
                />
                ％
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                垂直感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="lookVerticalSpeed"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={lookVerticalSpeed}
                    setValue={setLookVerticalSpeed}
                    rangeType="normal"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={lookVerticalSpeed}
                  setValue={setLookVerticalSpeed}
                  rangeType="normal"
                />
                ％
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                水平ブースト感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="turningHorizontalBoost"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={turningHorizontalBoost}
                    setValue={setTurningHorizontalBoost}
                    rangeType="magnification"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={turningHorizontalBoost}
                  setValue={setTurningHorizontalBoost}
                  rangeType="magnification"
                />
                倍
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                垂直ブースト感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="turningVerticalBoost"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={turningVerticalBoost}
                    setValue={setTurningVerticalBoost}
                    rangeType="magnification"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={turningVerticalBoost}
                  setValue={setTurningVerticalBoost}
                  rangeType="magnification"
                />
                倍
              </div>
            </Grid>
            {/* ADS設定 */}
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                ADS水平感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="adsLookHorizontalSpeed"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={adsLookHorizontalSpeed}
                    setValue={setAdsLookHorizontalSpeed}
                    rangeType="normal"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={adsLookHorizontalSpeed}
                  setValue={setAdsLookHorizontalSpeed}
                  rangeType="normal"
                />
                ％
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                ADS垂直感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="adsLookVerticalSpeed"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={adsLookVerticalSpeed}
                    setValue={setAdsLookVerticalSpeed}
                    rangeType="normal"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={adsLookVerticalSpeed}
                  setValue={setAdsLookVerticalSpeed}
                  rangeType="normal"
                />
                ％
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                ADS水平ブースト感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="adsTurningHorizontalBoost"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={adsTurningHorizontalBoost}
                    setValue={setAdsTurningHorizontalBoost}
                    rangeType="magnification"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={adsTurningHorizontalBoost}
                  setValue={setAdsTurningHorizontalBoost}
                  rangeType="magnification"
                />
                倍
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h4" variant="h4">
                ADS垂直ブースト感度
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="adsTurningVerticalBoost"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SensitivitySlider
                    value={adsTurningVerticalBoost}
                    setValue={setAdsTurningVerticalBoost}
                    rangeType="magnification"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.sensitivityInput}>
                <SensitivityInput
                  value={adsTurningVerticalBoost}
                  setValue={setAdsTurningVerticalBoost}
                  rangeType="magnification"
                />
                倍
              </div>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                登録
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  )
}
const useStyles = makeStyles((theme) => ({
  sensitivityInput: {
    marginLeft: theme.spacing(2),
  },
}))
