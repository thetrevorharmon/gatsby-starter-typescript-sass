import * as React from "react"
import { graphql } from "gatsby"
import './Index.scss'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  // const siteMetadata = this.props.data.site.siteMetadata

  public render() {
    const {
      name,
      tagline
    } = this.props.data.site.siteMetadata

    return (
      <div className="container">
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
    )
  }
}
