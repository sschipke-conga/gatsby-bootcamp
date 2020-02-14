import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout'


const ContactPage = () => (
  <Layout>
    <h1>This is how you can best contact me:</h1>
    <ul>
      <li>email: swschipke@gmail.com</li>
      <li>website: <a href="http://sschipke.com" target="blank">sschipke.com</a></li>
      <li>Twitter: @<a href="https://twitter.com/USSSchipke" target="blank">USSSchipke</a></li>
    </ul>
  </Layout>
)

export default ContactPage