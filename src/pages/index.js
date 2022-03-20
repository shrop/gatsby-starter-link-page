import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Link Page</h1>
    <ul>
      <li>shrop.dev</li>
      <li>Twitter</li>
      <li>Instagram</li>
      <li>drupal.org</li>
      <li>Github</li>
    </ul>
  </Layout>
)

export default IndexPage
