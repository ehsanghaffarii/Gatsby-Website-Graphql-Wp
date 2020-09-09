import React from "react"
import { graphql } from "gatsby"
import BlogPage from "../../components/template-parts/blog-page"

export default ({ data }) => <BlogPage data={data} />

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      slug
      uri
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
      seo {
        breadcrumbs {
          url
          text
        }
        title
        metaDesc
        opengraphType
        opengraphDescription
        twitterTitle
        twitterDescription
      }
      date
      author {
        node {
          name
        }
      }
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
