import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style.css"

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
            <Image
              style={{ display: "block" }}
              className="mx-auto lg:float-right lg:ml-2 my-2 lg:my-0"
              fixed={data.screenshot.childImageSharp.fixed}
            />
            <p className="my-2">
              Reflector: Laser Defense is a hybrid roguelike base-builder. You
              need to grow a colony on a hostile planet, with only yourself to
              defend it. It is actively in development and currently features:
            </p>
            <ul className="list-disc ml-5">
              <li className="my-2">
                No army, no allies. Just you and your laser.
              </li>
              <li className="my-2">Turn-based combat and base management.</li>
              <li className="my-2">
                Randomly generated maps with mountains, water, and ore.
              </li>
              <li className="my-2">
                Relentless waves of enemies that attack at night.
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
    screenshot: file(absolutePath: { regex: "/reflector.png/" }) {
      childImageSharp {
        fixed(width: 384, height: 384) {
          ...GatsbyImageSharpFixed
        }
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
