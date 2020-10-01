import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style.css"
import gameplayGif from "../../content/assets/alpha2-final.gif"

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
              // style={{ width: 384, height: 384 }}
              className="block mx-auto lg:float-right lg:ml-2 my-2 lg:my-0 w-full lg:max-w-sm"
              src={gameplayGif}
            />
            <p className="my-2">
              Reflector: Laser Defense is a hybrid roguelike base-builder about establishing a colony on an alien planet. Survive 10 days to win! It features:
            </p>
            <ul className="list-disc ml-5">
              <li className="my-2">
                <strong className="font-bold">Lasers and Mirrors</strong> - You have only one defense: your laser. Manipulate the beams to make the most of each shot.
              </li>
              <li className="my-2">
                <strong className="font-bold">Deterministic Combat</strong> - Everything dies in one hit, including you. Plan your turn without fear of the RNG.
              </li>
              <li className="my-2">
                <strong className="font-bold">Forgiveness in Moderation</strong> - Make a deadly mistake? Undo a single turn.
              </li>
              <li className="my-2">
                <strong className="font-bold">Wave Defense</strong> - Defend at night, rebuild and prepare during the day.
              </li>
              <li className="my-2">
                <strong className="font-bold">Four Resources to Manage</strong> - Grow food for your colonists, produce metal and machinery for buildings, and generate power to keep things running.
              </li>
              <li className="my-2">
                <strong className="font-bold">Traditional Roguelike Gameplay</strong> - Turn-based, grid-based, permadeath.
              </li>
              <li className="my-2">
                <strong className="font-bold">Keyboard and Mouse Controls</strong> - Fully playable with mouse and mostly playable with keyboard. (Full customizable keyboard controls coming soon!)
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
