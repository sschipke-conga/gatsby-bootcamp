import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => (
  <Layout>
    <h1>This is the about me section</h1>
    <p>Scott Schipke ...</p>
    <p>Want to work with me? <Link to="/contact">Get in touch!</Link></p>
  </Layout>
)

export default AboutPage