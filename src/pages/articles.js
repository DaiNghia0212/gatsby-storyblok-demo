import React from "react"
import ArticleTeaser from "../components/articleTeaser"
import { graphql } from "gatsby"

const Articles = ({ data }) => {
  const articles = data.allStoryblokEntry.nodes

  return (
    <>
      <p className="text-3xl text-center mx-auto mt-5">Articles</p>
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16">
        {articles &&
          articles.map(article => {
            return (
              <ArticleTeaser
                article={JSON.parse(article.content).body[0]}
                key={article.uuid}
                slug={article.full_slug}
              />
            )
          })}
      </div>
    </>
  )
}
export default Articles

export const query = graphql`
  query Articles {
    allStoryblokEntry(filter: { field_component: { eq: "articlePage" } }) {
      nodes {
        id
        full_slug
        created_at
        name
        uuid
        content
      }
    }
  }
`
