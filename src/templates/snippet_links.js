import React from "react"
import Layout from "../components/layout"
import Snippet from "../components/snippet"
import { Link } from "gatsby"

const SnippetsTemplate = ({ pageContext }) => {
    console.log(pageContext)
return (
  <Layout site={pageContext.site}>
    {pageContext.snippets.map(snippet => {
        var snippetClass="snippet-link"
        if(snippet.frontmatter.title.includes("[optional]")) {
            snippetClass = "snippet-link optional"
        }
        return <Link id={snippet.id} className={snippetClass} to={snippet.frontmatter.slug}><h2>{snippet.frontmatter.title}</h2><div>{snippet.frontmatter.description}</div></Link>})
    }
  </Layout>
)}

export default SnippetsTemplate
