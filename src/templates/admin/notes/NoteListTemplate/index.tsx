import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { PageData } from '../../../../domains/note/models'
import { NoteItem } from './NoteItem'

type Props = {
  notes: PageData[]
}
export const NoteListTemplate: React.VFC<Props> = ({ notes }) => {
  return (
    <>
      <Typography component="h3" variant="h3">
        ノート一覧
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          {notes.map((item) => {
            return <NoteItem key={item.id} pageSummary={item.pageSummary} />
          })}
        </Grid>
      </Grid>
    </>
  )
}
