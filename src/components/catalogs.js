import React from "react"
import { Link } from "gatsby"

const Catalogs = ({ catalogs }) => (
  <ul class="catalogs">
        <li class="catalog-header">
            <span class="catalog-name">name / id</span>
            <div class="catalog-description">details</div>
        </li>
      {catalogs.map((catalog, index) => {
        return <li key={`content_item_${index}`}>
            <span class="catalog-name">{catalog.name}</span>
            <div class="catalog-description">
                <div class="catalog-add-to-collection">
                    <span className="catalog-note">Add this URL to your local Album collection:</span>
                    <a href={catalog.album_url} class="catalog-album-url">{catalog.album_url}</a>
                </div>
                <ul>
                    <li>{catalog.description}</li>
                    <li>maintained by {catalog.maintainers}, developed <a href={catalog.development}>here</a></li>
                    <li>Browse catalog <a href={catalog.link}>online <img src={catalog.badge} alt="Pipeline status" height="18" /></a></li>
                </ul>
            </div>
          </li>
      })}
    </ul>
)
export default Catalogs