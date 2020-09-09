import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Icon } from "@chakra-ui/core"
// import GatsbyLogo from "../assets/svg/gatsby.inline.svg"

export default () => {

  return(
<Container>
  <Row>
    <Col className="d-flex p-2 mx-4">
      <div className="d-flex px-2 py-2">
        <Link to="/">
          <h1 className="site-title">
          EinQl Demo
          </h1>
          <p  className="site-subtitle">
            React website with Gatsby
          </p>
        </Link>
      </div>
      {/* <div
      style={{
        width: `50px`,
      }}
      >
              <GatsbyLogo />
      </div> */}
      <div className="d-flex px-2 py-2 ml-auto">
        <a className="mx-4 my-2" href="https://goldwin1.ir">
          <Icon color="gray.500" size="22px" name="star" />
        </a>
        <a className="mx-4 my-2" href="https://goldwin1.ir">
          <Icon color="gray.500" size="22px" name="email" />
        </a>
        <a className="mx-4 my-2" href="https://goldwin1.ir">
          <Icon color="gray.500" size="22px" name="search" />
        </a>
      </div>
    </Col>      
  </Row>
  </Container>
  )
}