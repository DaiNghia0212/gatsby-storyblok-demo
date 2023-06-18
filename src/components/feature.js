import React from "react"
import { storyblokEditable } from "gatsby-source-storyblok"

const Feature = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.name}</h2>
      <p>{blok.description}</p>
      <img src={blok.image?.filename} alt={blok.image?.alt}/>
    </div>
  )
}

export default Feature
