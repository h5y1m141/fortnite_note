import React from 'react'

type Props = {
  onSubmit: () => void
}

export const NewNoteTemplate: React.VFC<Props> = ({ onSubmit }) => {
  return (
    <>
      <h3>NewNote</h3>
      <div onClick={onSubmit}>test</div>
    </>
  )
}
