import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"
import "bootstrap/dist/css/bootstrap.min.css"
import { Stack, Box, Text, Button } from "@chakra-ui/core"
import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

export default ({ data, pageContext }) => (
  
  <Layout>
    <div className="col pageTitle">
            <h1 className="h1 text-center my-2 eee-color">
              Blog Articles and Posts
            </h1>
    </div>
    <Stack spacing={5} mt={4} className="d-block">
      {data.allWpPost.nodes.map((page) => (
        <Box p={4} bg="dark" className="mx-auto" key={page.link}>
          <Link to={normalizePath(page.uri)}>
            <Box className="blog-card" p={4} display={{ md: "flex" }} border="1px solid #ffffff66" boxShadow="9px 10px 5px -5px lightslategrey" rounded="lg">
              <Box p={1}>
              {!!page?.featuredImage?.node?.remoteFile?.childImageSharp && (
                <Img
                  fluid={
                    page.featuredImage.node.remoteFile.childImageSharp.fluid
                  }
                />
              )}
              </Box>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                  mt={1}
                  display="block"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  {page.title}
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="wide"
                  color="teal.600"
                  >
                    {`${page.author.node.name} | ${page.date} | ${`${page.terms.nodes.slug}`}`}
                </Text>
              
                <Text mt={2} fontSize="sm" className="post-excerpt">
                {`${page.seo["metaDesc"]}`}
                </Text>
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Stack>
    {pageContext && pageContext.totalPages > 1 && (
      <Box mt={10}>
        <ReactPaginate
          previousLabel={
            pageContext?.page !== 1 && <Button>Previous page</Button>
          }
          nextLabel={
            pageContext?.totalPages !== pageContext.page && (
              <Button>Next page</Button>
            )
          }
          onPageChange={({ selected }) => {
            const page = selected + 1
            const path = page === 1 ? `/blog/` : `/blog/${page}/`
            navigate(path)
          }}
          disableInitialCallback
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageContext.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          initialPage={pageContext.page - 1}
        />
      </Box>
    )}
  </Layout>
)

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  query HomePage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post", "Page", "Alot"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        link
        uri
        title
        date(fromNow: true)
        featuredImage {
          node {
            remoteFile {
              ...Thumbnail
            }
          }
        }
        terms {
          nodes {
            name
            slug
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        seo {
          metaDesc
          title
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`
