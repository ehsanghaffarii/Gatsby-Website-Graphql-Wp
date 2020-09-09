import React from "react"
import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"
import { Container } from "react-bootstrap"


import "../assets/style.css"

const Layout = ({ children }) => (
  <div>
    <div style={{ margin: `0 auto`, maxWidth: `90%` }} className="align-center" >
      <div mb={10} mt={5}>
        <Header />
      </div>
      <Menu />
      <Container style={{ background: 'rgba(0,0,0,.3)', color: '#FFFFFF', padding: '10px' }} >{children}</Container>

    </div>
    <Footer />
  </div>
)

export default Layout
