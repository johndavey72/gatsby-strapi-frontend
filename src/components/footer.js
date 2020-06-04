import React from "react"
import PropTypes from "prop-types"
import ListLink from "./listLink"

const footer = props => {
  return (
    <div>
      <h1 style={{ display: `inline` }}>Footer branding</h1>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  )
}

footer.propTypes = {}

export default footer
