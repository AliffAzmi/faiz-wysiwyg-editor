import { MarkType } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'

function isMarkActive (state: EditorState, mark: MarkType) {
  const { from, $from, to, empty } = state.selection
  return empty
    ? !!mark.isInSet(state.storedMarks || $from.marks())
    : state.doc.rangeHasMark(from, to, mark)
}

export default isMarkActive
