import React from "react"
const Catalogs = ({ catalogs }) => (
  <ul class="catalogs">
        <li class="header">
            <span class="catalog-name">name</span>
            <span class="catalog-description">album URL, maintainers, description</span>
        </li>
      {catalogs.map((catalog, index) => {
        return <li key={`content_item_${index}`}>
            <span class="catalog-name">{catalog.name}</span>
            <div class="catalog-description">
                <a href={catalog.album_url} class="catalog-album-url">{catalog.album_url}</a>
                <ul>
                    <li><a href={catalog.link}>web view <img src={catalog.badge} alt="Pipeline status" height="18" /></a></li>
                    <li>maintained by {catalog.maintainers} - <a href={catalog.development}>development repository</a></li>
                    <li>{catalog.description}</li>
                </ul>
            </div>
          </li>
      })}
    </ul>
)
export default Catalogs