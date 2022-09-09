import React from "react"
import {Component} from "react"
import Logo from "../components/logo-big"
import Layout from "../components/layout"
import Snippet from "../components/snippet"
import Badges from "../components/badges"
import { Link, withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import {useRef, useEffect} from 'react'
import Header from "../components/header"
import Catalogs from "../components/catalogs"
import CatalogsData from "../../catalogs.yml"
import SolutionExample from "../components/solution-example"

const getSnippet = (snippets, snippetSlug) => {
    for(const snippet of snippets) {
        if(snippet.frontmatter.slug === snippetSlug) {
            return snippet;
        }
    }
}

const getBoxDiv = (snippets, snippetSlug) => {
    var snippet = getSnippet(snippets, "/"+snippetSlug)
    return makeBox(snippetSlug, snippetSlug, snippet.frontmatter.title, snippet.frontmatter.subtitle, snippet.frontmatter.description, snippet.html)
}

const getComingSoonDiv = (snippets, snippetSlug) => {
    var snippet = getSnippet(snippets, "/"+snippetSlug)
    return makeBox(snippetSlug, snippetSlug + " coming-soon intro-box", snippet.frontmatter.title, snippet.frontmatter.subtitle, snippet.frontmatter.description, snippet.html)
}

const getSnippetDiv = (snippets, snippetSlug) => {
    var snippet = getSnippet(snippets, "/"+snippetSlug)
    var snippetClass="snippet-link intro-box"
    if(snippet.frontmatter.title.includes("[optional]")) {
        snippetClass = "snippet-link optional"
    }
    return <Link id={snippetSlug} className={snippetClass} to={snippet.frontmatter.slug}><h3>{snippet.frontmatter.title}</h3><div>{snippet.frontmatter.description}</div></Link>
}

const makeBox = (classId, className, title, subtitle, description, content) => {
    return <div id={classId} className={className}><h3>{title}</h3><div>{subtitle}</div><div className="box-content" dangerouslySetInnerHTML={{ __html: content }}/></div>
}

const SnippetsTemplate = ({ pageContext }) => {
const leaderLineBox = React.createRef()
  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.src = withPrefix('leader-line.min.js')
    if (leaderLineBox && leaderLineBox.current) {
      leaderLineBox.current.appendChild(scriptEl)
    }
  }, [])

return (
  <Layout site={pageContext.site}>
  <div className="line">
        <div className="flex-middle">
            <div>
                {getBoxDiv(pageContext.snippets, "more-information")}
                {getSnippetDiv(pageContext.snippets, "background")}
            </div>
        </div>
        <div className="flex-more"><Link to="/" ><Logo/></Link></div>
    </div>
    <div className="line">
        {getBoxDiv(pageContext.snippets, "browse_catalogs")}
        {getSnippetDiv(pageContext.snippets, "concepts")}
        {getBoxDiv(pageContext.snippets, "share_solutions")}
    </div>
    <div className="line" id="installer-line">
        <div className="dummy"/>
        <div>
            <h3 className="center">Installation</h3>
            <div className="line">
                {getSnippetDiv(pageContext.snippets, "install_gui")}
                {getSnippetDiv(pageContext.snippets, "install_commandline")}
            </div>
        </div>
        <div className="dummy"/>
    </div>
    <div className="line">
        <div className="dummy"/>
        {getSnippetDiv(pageContext.snippets, "run_solution_from_catalog")}
        {getSnippetDiv(pageContext.snippets, "solution_writing")}
        <div className="dummy"/>
    </div>
    <div className="line">
        <div className="flex-middle">

            {getComingSoonDiv(pageContext.snippets, "solutions_data_workflows")}
            {getComingSoonDiv(pageContext.snippets, "solutions_in_the_cloud")}
        </div>
        <div id="sharing_via_catalogs" className="flex-more">
            <h3 className="center">Sharing solutions via catalogs</h3>
            <div>
                {getSnippetDiv(pageContext.snippets, "remote_catalog")}
                {getSnippetDiv(pageContext.snippets, "add_to_catalog")}
                {getSnippetDiv(pageContext.snippets, "local_catalog")}
            </div>
        </div>
    </div>
    <div className="line">
        <div/>
        {getComingSoonDiv(pageContext.snippets, "packaging-coming-soon")}
    </div>
    <div ref={leaderLineBox}></div>
    <h2>Repositories / releases</h2>
    <Badges/>
    <h2 id="list-of-catalogs">List of catalogs</h2>
    {getBoxDiv(pageContext.snippets, "catalogs")}
    <Catalogs catalogs={CatalogsData} />
    <h2>Example solution</h2>
    {getBoxDiv(pageContext.snippets, "solution-example")}
    <SolutionExample />
</Layout>
)}

export default SnippetsTemplate
