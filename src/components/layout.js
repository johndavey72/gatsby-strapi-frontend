import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "./seo"
import Nav from "./nav"
import Footer from "./footer"
import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  console.log(data)

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1024px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Seo />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
