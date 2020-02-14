import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
      <h1>Hello</h1>
      <h2>Hi, I'm Scott a Full Stack Developer</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      <Link to="/about">A little more about me</Link>
  </Layout>
)

export default IndexPage
