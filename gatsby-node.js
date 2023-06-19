exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const {
    data: {
      allStoryblokEntry: { nodes: articles },
    },
  } = await graphql(`
    query Articles {
      allStoryblokEntry(filter: { field_component: { eq: "articlePage" } }) {
        nodes {
          content
          name
          full_slug
          uuid
          id
          internalId
        }
      }
    }
  `)

  articles.forEach(article => {
    actions.createPage({
      path: article.full_slug,
      component: require.resolve("./src/templates/article.template.js"),
      context: { article: article },
    })
  })
}
