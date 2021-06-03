import React from 'react'
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Grid, Button, makeStyles, Box, Typography } from '@material-ui/core'

import { useEditorState } from './useEditorState'
import { CreateTemplateModal } from './CreateTemplateModal'
import { FetchTemplateModal } from './FetchTemplateModal'
import { FortniteNoteAlert } from '../../../../components/FortniteNoteAlert'
import { PageData } from '../../../../domains/note/models'

type Props = {
  noteTemplates: PageData[]
  onSubmit: (data: any) => void
  onClickCreateTemplate: (title: string, data: any) => void
  isNoteCreated: boolean
  isNoteCreateionFailed: boolean
}

export const NewNoteTemplate: React.VFC<Props> = ({
  noteTemplates,
  onSubmit,
  onClickCreateTemplate,
  isNoteCreated,
  isNoteCreateionFailed,
}) => {
  const classes = useStyles()
  const { editorState, onChange } = useEditorState()

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const rawEditorData = convertToRaw(editorState.getCurrentContent())
    onSubmit(rawEditorData.entityMap)
  }

  const onHandleCreateTemplate = (title: string) => {
    const rawEditorData = convertToRaw(editorState.getCurrentContent())
    onClickCreateTemplate(title, rawEditorData)
  }

  const onHandleLoadTemplate = (event: any) => {
    const element = event.target
    const templateID = element.getAttribute('data-id')
    const item = noteTemplates.find((template) => {
      return template.id === templateID
    })
    if (item) {
      const state = EditorState.createWithContent(
        convertFromRaw({
          entityMap: {},
          blocks: item?.note.blocks,
        })
      )
      onChange(state)
    }
  }

  return (
    <>
      <Typography component="h3" variant="h3">
        新規ノート作成
      </Typography>
      <FortniteNoteAlert
        isCreated={isNoteCreated}
        isFailed={isNoteCreateionFailed}
      />

      <Box p={1}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Grid item>
            <CreateTemplateModal
              buttonLabel="テンプレートとして登録"
              onClickCreateTemplate={onHandleCreateTemplate}
            />
          </Grid>
          <Grid item>
            <Box p={1} />
          </Grid>
          <Grid item>
            <FetchTemplateModal
              noteTemplates={noteTemplates}
              buttonLabel="テンプレートを呼び出す"
              onClick={onHandleLoadTemplate}
            />
          </Grid>
        </Grid>
      </Box>
      <form onSubmit={onHandleSubmit}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <div className={classes.editorContainer}>
              <Editor
                editorState={editorState}
                onEditorStateChange={onChange}
                editorStyle={{
                  border: '1px solid #cccccc',
                  padding: '4px',
                  minHeight: '200px',
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" color="primary">
              登録する
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    padding: theme.spacing(2),
    border: '1px solid #999999',
  },
}))
