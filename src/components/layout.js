import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

class Layout extends React.Component {
  render() {
    const { location, subtitle, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <hgroup className="mb-3">
          <h1>
            <Link className="no-underline text-gray-300" to={`/`}>
              {title}
            </Link>
          </h1>
          <h2 className="text-base font-normal">{subtitle}</h2>
        </hgroup>
      )
    } else {
      header = (
        <h3>
          <Link className="no-underline text-gray-300" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }

    const year = new Date().getFullYear()
    return (
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-800 px-10 py-5 mx-auto">
        <header>
          {header}
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          © 2019{year !== 2019 ? ` - ${year}` : null} Michael Moore, powered by
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
