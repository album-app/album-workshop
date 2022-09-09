import React from "react"

const Badges = () => (

    <>
        <div class="badges">
            <a href="https://badge.fury.io/py/album"><span>pip</span><img src="https://badge.fury.io/py/album.svg" alt="PyPI version" height="18" /></a>
            <a href="https://gitlab.com/album-app/album"><span>album</span><img src="https://gitlab.com/album-app/album/badges/main/pipeline.svg" alt="Gitlab pipeline status album core" height="18" /></a>
            <a href="https://gitlab.com/album-app/album-runner"><span>runner</span><img src="https://gitlab.com/album-app/album-runner/badges/main/pipeline.svg" alt="Gitlab pipeline status album runner" height="18" /></a>
            <a href="https://gitlab.com/album-app/album-app"><span>ui</span><img src="https://gitlab.com/album-app/album-app/badges/main/pipeline.svg" alt="Gitlab pipeline status album UI" height="18" /></a>
            <a href="https://gitlab.com/album-app/album-solutions"><span>website</span><img src="https://gitlab.com/album-app/album-solutions/badges/main/pipeline.svg" alt="Gitlab pipeline status album solutions website" height="18" /></a>
            <a href="https://gitlab.com/album-app/gatsby-theme-album"><span>gatsby-theme</span><img src="https://gitlab.com/album-app/gatsby-theme-album/badges/main/pipeline.svg" alt="Gitlab pipeline status album gatsby theme" height="18" /></a>
            <a href="https://hub.docker.com/r/albumsolutions/album/tags"><span>docker container</span><img src="https://img.shields.io/docker/pulls/albumsolutions/album" alt="Docker pulls of the album container" height="18" /></a>
        </div>
    </>
)
export default Badges
