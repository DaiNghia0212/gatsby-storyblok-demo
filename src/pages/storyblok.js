import * as React from "react"
import { graphql } from "gatsby"

import { useStoryblokState, StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok"

import Layout from "../components/layout"

const StoryblokPage = ({ data }) => {
  let story = data.storyblokEntry
  story = useStoryblokState(story)

  const components = story.content.body.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        <h1>{story.name}</h1>
        {components}
      </div>
    </Layout>
  )
}

export default StoryblokPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "storyblok" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`
