import React from "react"
import Layout from "../components/layout"
import Snippet from "../components/snippet"

const SnippetsTemplate = ({ pageContext }) => (
  <Layout site={pageContext.site}>
    <Snippet snippet={pageContext.snippet} snippets={pageContext.snippets}/>
  </Layout>
)

export default SnippetsTemplate