import * as functions from 'firebase-functions'

type BrStatsParams = {
  name: string
  accountType?: 'epic' | 'psn' | 'xbl'
  timeWindow?: 'season' | 'lifetime'
  image?: 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none'
}
export const nonOfficialFortniteApiFunc = functions
  .region('asia-northeast1')
  .https.onCall(async (data, context) => {
    if (context.auth) {
      const FortniteAPI = require('fortnite-api-com')
      const apikey = functions.config().fortnite.apikey
      const config = {
        apikey: apikey,
        language: 'en',
        debug: true,
      }
      const fortnite = new FortniteAPI(config)

      const statsParams: BrStatsParams = {
        name: data.userID,
      }

      const apiResponse = await fortnite.BRStats(statsParams)

      return {
        apiResponse: apiResponse,
      }
    }
    return {
      apiResponse: null,
    }
  })
