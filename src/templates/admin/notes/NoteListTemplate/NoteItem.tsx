import React from 'react'
import { Typography } from '@material-ui/core'

import { PageSummary } from '../../../../domains/note/models'
type Props = {
  pageSummary?: PageSummary
}
export const NoteItem: React.VFC<Props> = ({ pageSummary }) => {
  return (
    <>
      <Typography component="h6" variant="h6">
        {pageSummary?.text}
      </Typography>
    </>
  )
}
