import { Command } from 'prosemirror-commands'
import { EditorState, Transaction } from 'prosemirror-state'

export default function toggleHRCommand (mark: any): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => toggleHR(mark)(state, dispatch)
}
function toggleHR (mark: any) {
  //   throw new Error('Function not implemented.')
  return mark.create()
}
