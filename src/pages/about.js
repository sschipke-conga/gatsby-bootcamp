import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => (
  <div>
    <h1>This is the about me section</h1>
    <p>Scott Schipke ...</p>
    <p>Want to work with me? <Link to="/contact">Get in touch!</Link></p>
  </div>
)

export default AboutPage