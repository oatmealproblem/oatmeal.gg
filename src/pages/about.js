import React from "react"
import Layout from "../components/layout"

export default function About({ location }) {
  return (
    <Layout location={location} title="About Me">
      <article>
        <p className="my-3">
          I'm Michael Moore (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Michael_Moore"
          >
            one
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Michael_Moore_(bassist)"
          >
            of
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Michael_Moore_(disambiguation)"
          >
            many
          </a>
          ), a web developer and hobbyist game developer based in Minneapolis,
          Minnesota. Besides programming, I enjoy board games, history, reading,
          studying Chinese, and playing with my dog.
        </p>
        <p className="my-3">You can find me across the web:</p>
        <ul className="my-3 list-disc ml-5">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MichaelMakesGames"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://michaelmakes.itch.io"
            >
              itch.io
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/mmakesgames"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reddit.com/u/michaelmakesgames"
            >
              Reddit
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mscottmooredev"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.goodreads.com/user/show/92364835-michael-moore"
            >
              goodreads
            </a>
          </li>
        </ul>
      </article>
    </Layout>
  )
}
