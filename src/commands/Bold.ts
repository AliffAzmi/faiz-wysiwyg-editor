import { MarkType } from 'prosemirror-model'
import { schema } from 'prosemirror-schema-basic'
import { EditorState, Transaction } from 'prosemirror-state'
import { Command, toggleMark } from 'prosemirror-commands'
import isMarkActive from './isMarkActive'

export const isBold = (state: EditorState): boolean => {
  return isMarkActive(state, schema.marks.strong)
}

export const toggleBoldCommand = (mark: MarkType): Command => {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => toggleMark(mark)(state, dispatch)
}
