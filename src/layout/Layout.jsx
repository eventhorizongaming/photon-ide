import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { EditorPane } from "./panes/EditorPane.jsx";
import { SidebarPane } from "./panes/SidebarPane.jsx";
import { TopMenu } from "./panes/TopMenu.jsx";

function Layout() {
  return (
    <>
      <TopMenu />

      <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--gapHorizontal)', padding: '0px var(--gapVertical)', height: 'calc(100% - 2em - var(--gapVertical) * 2)' }}>

      <SidebarPane />

      <PanelGroup direction="horizontal">

        <EditorPane />

        <PanelResizeHandle className="react-pane-handle" />

        <Panel>
          <PanelGroup direction="vertical">
            <Panel className="react-pane">
              top
            </Panel>

            <PanelResizeHandle className="react-pane-handle" />

            <Panel className="react-pane">
              bottom
            </Panel>
          </PanelGroup>
        </Panel>

      </PanelGroup>

      </div>
    </>
  )
}

export { Layout };
