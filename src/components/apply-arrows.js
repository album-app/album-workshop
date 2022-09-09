import React, { useState,useRef, useEffect } from "react"
import { Script, withPrefix } from "gatsby"


const addScript = url => {
    const script_id="leader-line-script"
    var old_script = document.getElementById(script_id);
    if(old_script != null) {
        old_script.parentNode.removeChild(old_script);
    }
    const script = document.createElement("script")
    script.id=script_id
    script.src = url
    script.async = true
    document.body.appendChild(script)
}

function ApplyArrows(location) {
  const [loaded, setLoaded] = useState(false)

  const myRef = useRef({
    location: null,
  })
  useEffect(() => {
    // set the location on initial load
    if (!myRef.current.location) myRef.current.location = location.location
    // then make sure dialog is closed on route change
    else if (myRef.current.location !== location) {
      addScript(withPrefix('leader-line-apply.js'))
      myRef.current.location = location
    }
  })
  return (
    <>
      <Script id="leader-line-script" src={withPrefix('leader-line.min.js')} onLoad={() => setLoaded(true)} />
      {loaded && <Script id="leader-line-script" src={withPrefix('leader-line-apply.js')} />}
    </>
  )
}

export default ApplyArrows
