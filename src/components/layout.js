import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import "@fontsource/ubuntu"
import "../css/layout.css"
import "../css/base-theme.css"
import "../css/theme.css"

const Layout = ({ site, children }) => {
  return (
    <>
    <Helmet
      title={site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'sample description' },
        { name: 'keywords', content: 'sample, album, collection' },
      ]}
    >
    </Helmet>
    <div className="root">
        <div className="main">
            <div className="content">
                {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout