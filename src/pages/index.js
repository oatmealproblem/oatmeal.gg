import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style.css"
import gameplayGif from "../../content/assets/alpha3.gif"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        subtitle={description}
      >
        <SEO title="All posts" />
        <article className="clearfix my-10">
          <header>
            <h3>Introduction</h3>
          </header>
          <section>
            <img
              className="block mx-auto lg:float-right lg:ml-2 my-2 lg:my-0 w-full lg:max-w-sm"
              src={gameplayGif}
            />
            <p className="my-2">
              Reflector: Laser Defense is a hybrid roguelike base-builder about establishing a colony on an alien planet. <a href="https://michaelmakes.itch.io/reflector" target="_blank" rel="noopener noreferrer">Play now on itch.io!</a>
            </p>
            <ul className="list-disc ml-5">
              <li className="my-2">
                <strong className="font-bold">Laser-slinging Combat</strong>: Reflect, split, and absorb your laser beam to make the most of each shot
              </li>
              <li className="my-2">
                <strong className="font-bold">Colony Management</strong>: Provide housing and jobs for your colonists, who then produce resources for you
              </li>
              <li className="my-2">
                <strong className="font-bold">Wave Survival</strong>: increasingly large and dangerous hordes of aliens attach each night!
              </li>
              <li className="my-2">
                <strong className="font-bold">Short Sessions</strong>: a full successful game takes about an hour, so you don't need to worry about losing hours upon hours of progress
              </li>
              <li className="my-2">
                <strong className="font-bold">Undo Your Mistakes</strong>: you can fully undo up to 20 turns -- experiment without fear!
              </li>
              <li className="my-2">
                <strong className="font-bold">Traditional Roguelike Gameplay</strong> : play as a individual character in a randomly generated turned-based grid-based world
              </li>
            </ul>
          </section>
        </article>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className="my-10">
              <header className="mb-1">
                <h3 className="mb-2">
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small className="text-sm italic">
                  {node.frontmatter.date}
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
