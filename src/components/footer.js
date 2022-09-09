import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"

const Footer = ({site}) => (
<>
    <div class="footer">
        <Header siteMeta={site.siteMetadata} />
        <div className="flex"/>
        <div className="link-header">
            <div className="nav">
                <Link as="nav" activeClassName="active" key="imprint" to="/imprint">Imprint</Link>
                <Link as="nav" activeClassName="active" key="privacy-policy" to="/privacy-policy">Privacy Policy</Link>
            </div>
            <a href="https://www.helmholtz-imaging.de/" class="affiliation"><StaticImage src="../images/hip-logo.png" placeholder="blurred" layout="fixed" height={80} alt="Helmholtz Imaging" /></a>
            <a href="https://www.mdc-berlin.de/" class="affiliation"><StaticImage src="../images/MDC_logo_V1_RGB-schwarz.png" placeholder="blurred" layout="fixed" height={80} alt="MDC Berlin" /></a>
        </div>
    </div>
</>
)

export default Footer