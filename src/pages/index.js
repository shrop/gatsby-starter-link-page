import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Masonry from "react-masonry-css"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Link Page</h1>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
      <div>Link 4</div>
    </Masonry>
  </Layout>
)

export default IndexPage
