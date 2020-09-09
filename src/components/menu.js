import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "@chakra-ui/core"
import { normalizePath } from "../utils/get-url-path"
import { Navbar, Nav, Container }  from "react-bootstrap"

export default () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <Container>
    <Navbar collapseOnSelect expand="lg" variant="dark" className="mb-4">
      <Navbar.Toggle aria-controls="Navbar-test"></Navbar.Toggle>
      <Navbar.Collapse id="Navbar-test">
      <Nav className="mx-auto">
          {wpMenu.menuItems.nodes.map((menuItem, i) => {
            if (menuItem.parentId) {
              return null
            }

            const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

            return (
              <Nav.Link
                className="px-3"
                key={i + menuItem.url}
                href={normalizePath(path)}
              >
                <Box py={4}>
                  {menuItem.label}
                </Box>
              </Nav.Link>
            )
          })}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
</Container>
  ) : null
}
