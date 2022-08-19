import React from "react"
import Layout from "../pages/layout"
import Snippet from "../pages/snippet"
import { Link } from "gatsby"

const SnippetsTemplate = ({ pageContext }) => {
    console.log(pageContext)
return (
  <Layout site={pageContext.site}>
    {pageContext.snippets.map(snippet => {
        var snippetClass="snippet-link"
        if(snippet.snippetTitle.includes("[optional]")) {
            snippetClass = "snippet-link optional"
        }
        return <Link id={snippet.id} className={snippetClass} to={"/"+snippet.name}><h2>{snippet.snippetTitle}</h2><div>{snippet.snippetDescription}</div></Link>})
    }
  </Layout>
)}

export default SnippetsTemplate
