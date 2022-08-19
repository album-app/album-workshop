import React from "react"
import Layout from "../pages/layout"
import Snippet from "../pages/snippet"

const SnippetsTemplate = ({ pageContext }) => (
  <Layout site={pageContext.site}>
    <Snippet snippet={pageContext.snippet}/>
  </Layout>
)

export default SnippetsTemplate