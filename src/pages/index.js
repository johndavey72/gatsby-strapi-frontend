import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
    {/* <div style={{ color: `purple` }}> */}
    <div>
      <noscript>This site is best enjoyed with javascript enabled</noscript>
      <Link to="/contact/">Contact</Link> ** 
      <Link to="/about-css-modules/">About CSS Modules</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    </Layout>
  )
}