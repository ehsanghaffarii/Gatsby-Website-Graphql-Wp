import React from "react"

import { Link } from "gatsby"
import { Heading, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from "@chakra-ui/core"
// import Img from "gatsby-image"
import Layout from "../../components/layout"
import { normalizePath } from "../../utils/get-url-path"
import Seo from "../seo"
import { Button, Container, Row, Badge } from "react-bootstrap"


function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content } = page

  return (
    <Layout>
      <Seo title={`${page.seo["title"]}`} description={`${page.seo["metaDesc"]}`} />
      <Container className="container">
        <Row className="row">
          <div className="col-12 pageTitle text-center">
            <Heading className="eee-color" as="h1" size="xl" style={{ textAlign: 'center' }} mb={5}>
              {title}
            </Heading>
          <Breadcrumb>
            <BreadcrumbItem className="date" isCurrentPage> 
              <BreadcrumbLink>
                {`${page.author.node.name}`}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem className="date" isCurrentPage>
              <BreadcrumbLink>
                {`${page.categories.nodes[0].name}`}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          </div>
          <div className="container">
            <div className="col px-4">
              <p className="text-center p-3 eee-color" dangerouslySetInnerHTML={{ __html: content }} />
              <div className="row p-2 border-top pt-3 mt-5">
                <div className="col text-center p-2">
                  {/* <Button variant="secondary" className="mx-1" size="sm">
                    Category: <Badge variant="light">{`${page.categories.nodes[0].name}`}</Badge>
                  </Button>
                  <Button variant="secondary" className="mx-1" size="sm">
                    Posted by: <Badge variant="light">{`${page.author.node.name}`}</Badge>
                  </Button> */}
                </div>
                <div className="col text-center p-2">
                  {!!nextPage && (
                    <Button variant="primary" className="mx-1" size="sm">
                      <Link to={`${normalizePath(nextPage.uri)}`}>Next: <Badge variant="light">{`${nextPage.title}`}</Badge></Link>
                    </Button>
                  )}

                  {!!previousPage && (
                    <Button variant="primary" className="mx-1" size="sm">
                      <Link to={`${normalizePath(previousPage.uri)}`}>Previous: <Badge variant="light">{`${previousPage.title}`}</Badge></Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogPost
