import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import Img from 'gatsby-image'



const Photos = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Headshot(git).jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (<Layout>
    <Img 
      fluid={data.placeholderImage.childImageSharp.fluid}
    />

  </Layout>)

  }

export default Photos