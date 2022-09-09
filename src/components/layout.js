import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import Footer from "./footer"
import "@fontsource/ubuntu"
import "../css/layout.css"
import "../css/base-theme.css"
import "../css/theme.css"
import ApplyArrows from "../components/apply-arrows"
import { useLocation } from '@reach/router'

const Layout = ({ site, children, location }) => {
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
    <Footer site={site}/>
    <div className="root">
        <div className="main">
            <div className="content">
                {children}
            </div>
        </div>
    </div>
    <ApplyArrows location={useLocation()}/>
    </>
  )
}

export default Layout