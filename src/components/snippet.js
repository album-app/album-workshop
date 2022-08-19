import React from "react"
import Layout from "../pages/layout"

const SnippetTemplate = ({ snippet }) => {
return (
<div class="snippet">
    <h1 class="title">{snippet.snippetTitle}</h1>
    <div class="description">{snippet.snippetDescription}</div>
    <div dangerouslySetInnerHTML={{ __html: snippet.children[0].html }}/>
    <a class="feedback" href={snippet.snippetLink}>
    <b>Congratulations, you finished this section of our workshop!</b><br/>
    Please click on this box - it will open a GitLab page where you can give this part of our workshop a thumbs up if you finished this secion successfully and the possibility to leave a comment with more specific feedback. We appreciate you!
    </a>
</div>

)}

export default SnippetTemplate