import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./logo"

const Header = ({ siteMeta }) => (
<div className="header">
    <div className="header-logo"><Link to="/" ><Logo/></Link></div>
    <div className="small-screen-spacer"></div>
    <div className="header-text">
        <Link to="/"><div className="header-title">{siteMeta.title}</div><div className="header-subtitle">{siteMeta.subtitle}</div></Link>
    </div>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Title`,
}

export default Header