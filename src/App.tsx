import React, { ReactNode } from 'react'
import { useProseMirror, ProseMirror } from 'use-prosemirror'
import { schema } from 'prosemirror-schema-basic'
import { history, redo, undo } from 'prosemirror-history'
import { isBold, toggleBoldCommand } from './commands/Bold'
import { isItalic, toggleItalicCommand } from './commands/Italic'
// import toggleHRCommand from './commands/HorizontalRule'
// import logo from './logo.svg';
import './App.css'

const opts = {
  schema,
  plugins: [
    history()
  ]
}
export default function App() {
  const [state, setState] = useProseMirror(opts);

  const toggleBold = toggleBoldCommand(schema.marks.strong)
  const toggleItalic = toggleItalicCommand(schema.marks.em)
  // const toggleHR = toggleHRCommand(schema.nodes.horizontal_rule)

  const Button = (props: {
    children: ReactNode,
    className?: string,
    isActive: boolean,
    onClick: () => void,
  }) => {
    return (
      <button
        className={`${props.className} text-sm pointer w-9 h-9 mr-1 flex items-center justify-center border-2 shadow-none`}
        style={{
          backgroundColor: props.isActive ? "#efeeef" : "#fff",
          color: props.isActive ? "blue" : "black"
        }}
        onMouseDown={handleMouseDown}
      >
        {props.children}
      </button>
    )
    function handleMouseDown(e: React.MouseEvent) {
      e.preventDefault();
      props.onClick();
    }
  }


  return (
    <div className="font-sans">
      <div className="flex mb-2 pl-1">
        <Button
          className="font-bold"
          isActive={isBold(state)}
          onClick={() => toggleBold(state, (tr) => setState(state.apply(tr)))}
        >
          B
        </Button>
        <Button
          className="italic font-bold"
          isActive={isItalic(state)}
          onClick={() => toggleItalic(state, (tr) => setState(state.apply(tr)))}
        >
          I
        </Button>
        {/* <Button
          className="font-bold horizontal-rule"
          isActive={false}
          onClick={() => toggleHR(state, (tr) => setState(state.apply(tr)))}
        >
          -
        </Button> */}
      </div>
      <div className="p-4 border border-gray-400 transition-transform border-r-4 bg-white">
        <ProseMirror
          className="ProseMirror"
          state={state}
          onChange={setState}
        />
      </div>
    </div>
  )
}
