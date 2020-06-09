import React from "react"
// import PropTypes from "prop-types"
import ListLink from "./listLink"

const Footer = props => {
  return (
    <div>
      <h1 style={{ display: `inline` }}>The Benefits Directory</h1>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  )
}

// Footer.propTypes = {}

export default Footer
