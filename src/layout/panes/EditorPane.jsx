import { Panel } from "react-resizable-panels";
import { Editor } from "@monaco-editor/react";

function EditorPane() {
  return (
    <Panel className="react-pane">
      <Editor height="100%" defaultLanguage="javascript" defaultValue="// some comment" theme={window.monacoTheme} />
    </Panel>
  )
}

export { EditorPane };
