import React from "react"
import Layout from "../components/layout"
import {
  useStoryblokState,
  storyblokEditable,
  StoryblokComponent,
} from "gatsby-source-storyblok"

const ArticleTemplate = ({ pageContext }) => {
  let story = pageContext.article
  story = useStoryblokState(story)

  const components = story.content.body.map(blok => (
    <StoryblokComponent blok={blok} key={blok._uid} />
  ))

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>{components}</div>
    </Layout>
  )
}
export default ArticleTemplate
