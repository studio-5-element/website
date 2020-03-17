const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node);
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.downloadMediaFiles = ({
    nodes,
    getCache,
    createNode,
    createNodeId,
    _auth,
}) => {
    nodes.map(async node => {
        let fileNode
        fmImagesToRelative(node);
        try {
            fileNode = await createRemoteFileNode({
                url: node.source_url,
                parentNodeId: node.id,
                getCache,
                createNode,
                createNodeId,
                auth: _auth,
            })
        } catch (e) {
            // Ignore
        }

        // Adds a field `localFile` to the node
        // ___NODE appendix tells Gatsby that this field will link to another node
        if (fileNode) {
            node.localFile___NODE = fileNode.id
        }
    })
}
