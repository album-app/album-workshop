import React from "react"

const CodeWithNote = ({highlight, note, children}) => (
    <div class={note != null? "explained-code tooltip" : "explained-code"}>
        {note != null? <span class="tooltiptext">{note}</span> : ""}
        <pre dangerouslySetInnerHTML={{
      __html: children.replace(highlight, '<span class="booh">' + highlight + '</span>')
    }}></pre>
    </div>
)
export default CodeWithNote
