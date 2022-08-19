import React from "react"
import Layout from "../pages/layout"
import Snippet from "../pages/snippet"

const SnippetsTemplate = ({ pageContext }) => (
  <Layout site={pageContext.site}>
    {pageContext.snippets.map(snippet => {return <Snippet snippet={snippet}/>})}
  </Layout>
)

export default SnippetsTemplate