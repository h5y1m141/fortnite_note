import firebase from '../../Firebase'
import { RawDraftInlineStyleRange, RawDraftEntityRange } from 'draft-js'

export type Note = {
  id?: string
  title: string
  content: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

// typeの型定義は以下を参照
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/570b48f925f247b1be837313861e10efc5375ea6/types/draft-js/index.d.ts#L376-L389
export type NoteContent = {
  data: { [key: string]: any }
  depth: number
  entityRanges: RawDraftEntityRange[]
  inlineStyleRanges: RawDraftInlineStyleRange[]
  key: string
  text: string
  type:
    | 'unstyled'
    | 'paragraph'
    | 'header-one'
    | 'header-two'
    | 'header-three'
    | 'header-four'
    | 'header-five'
    | 'header-six'
    | 'unordered-list-item'
    | 'ordered-list-item'
    | 'blockquote'
    | 'code-block'
    | 'atomic'
}
