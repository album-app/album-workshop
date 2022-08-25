import React from "react"
import Layout from "./layout"
import Comment from "./comment"
import {useRef, useEffect} from 'react'

const SnippetTemplate = ({ snippet }) => {
  const commentBox = React.createRef()

  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.async = true
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'album-app/album-workshop')
    scriptEl.setAttribute('issue-term', 'pathname')
    scriptEl.setAttribute('id', 'utterances')
    scriptEl.setAttribute('theme', 'github-dark')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [])

return (
<div class="snippet">
    <h1 className="title">{snippet.frontmatter.title}</h1>
    <div className="description">{snippet.frontmatter.description}</div>
    <div dangerouslySetInnerHTML={{ __html: snippet.html }}/>
    <div className="feedback">
        <b>Congratulations, you finished this section of our workshop!</b><br/>
        <Comment commentBox={commentBox} />
    </div>
</div>

)}

export default SnippetTemplate
