import React from "react"

// import { Link } from "gatsby"
import { Heading } from "@chakra-ui/core"
// import Img from "gatsby-image"
import Layout from "../layout"
// import { normalizePath } from "../../utils/get-url-path"
import Seo from "../seo"
import { Container, Row } from "react-bootstrap"


function BlogPage({ data }) {
  const { page } = data
  const { title, content } = page


  return (
    <Layout>
      <Seo title={`${page.seo["title"]}`} description={`${page.seo["metaDesc"]}`} />
      <Container className="container">
        <Row className="row">
          <div className="col pageTitle">
            <Heading className="eee-color" as="h1" size="xl" style={{ textAlign: 'center'}} my={5}>
              {title}
            </Heading>
          </div>
          <div className="container">
            <div className="col px-4 mb-5">
              <p className="text-center p-3 homeText eee-color" dangerouslySetInnerHTML={{ __html: content }} />
            {/* <div className="row p-2 border-top pt-3 mt-5">
              <div className="col text-center p-2">
                  <Button variant="secondary" className="mx-1" size="sm">
                    Post Data: <Badge variant="light">{`${page.date}`}</Badge>
                  </Button>
                  <Button variant="secondary" className="mx-1" size="sm">
                    Posted by: <Badge variant="light">{`${page.author.node.name}`}</Badge>
                  </Button>
              </div>
              <div className="col text-center p-2">
                  {!!nextPage && (
                  <Button variant="primary" className="mx-1" size="sm">
                    <Link to={normalizePath(nextPage.uri)}>Next: <Badge variant="light">{nextPage.title}</Badge></Link>
                  </Button>
                  )}
                  {!!previousPage && (
                  <Button variant="primary" className="mx-1" size="sm">  
                    <Link to={normalizePath(previousPage.uri)}>Previous: <Badge variant="light">{previousPage.title}</Badge></Link>
                  </Button>
                  )}
              </div>
              </div> */}
            </div>
            </div>
        </Row>
      </Container>

    </Layout>
  )
}

export default BlogPage
