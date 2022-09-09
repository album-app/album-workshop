import React from "react"
import Layout from "./layout"
import Comment from "./comment"
import {useRef, useEffect} from 'react'
import { Link } from "gatsby"

const SnippetTemplate = ({ snippet, snippets }) => {
  const commentBox = React.createRef()

  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.async = true
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'album-app/album-workshop')
    scriptEl.setAttribute('issue-term', 'pathname')
    scriptEl.setAttribute('id', 'utterances')
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [])


const getSnippet = (snippets, snippetSlug) => {
    for(const snippet of snippets) {
        if(snippet.frontmatter.slug === snippetSlug) {
            return snippet;
        }
    }
}

const getSnippetDiv = (snippets, snippetSlug) => {
    var snippet = getSnippet(snippets, "/"+snippetSlug)
    var snippetClass="snippet-link next-step"
    return <Link id={snippetSlug} className={snippetClass} to={snippet.frontmatter.slug}>
        <div><h3>{snippet.frontmatter.title}</h3><div>{snippet.frontmatter.description}</div></div>
        <div className="arrow">➤</div>
    </Link>
}

const getNextSteps = (snippet, snippets) => {
    if(snippet.frontmatter.next){
        return <div className="next-steps"><h2>Next steps</h2>{snippet.frontmatter.next.map((next_snippet) => {return getSnippetDiv(snippets, next_snippet);})}</div>
    }
}

return (
<div class="snippet">
    <h1 className="title">{snippet.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: snippet.html }}/>
    {getNextSteps(snippet, snippets)}
    <div className="feedback">
        <b>Questions, complaints, ideas?</b><br/><br/>
        Just leave a comment in the box below after signing in with GitHub. Any feedback is highly appreciated.<br/><br/>
        <Comment commentBox={commentBox} />
    </div>
</div>

)}

export default SnippetTemplate
