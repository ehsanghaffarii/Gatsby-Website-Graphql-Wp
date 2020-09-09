import React from 'react'
import { Link } from 'gatsby'



export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container text-secondary">
        <p  className="text-center border-bottom pb-1 mx-auto small" >
          This is footer Component
        </p>
        <nav className="footer-links">
          <Link className="mx-2 text-secondary" to="/blog">Blog</Link>
          <Link className="mx-2 text-secondary" to="/contact">contact</Link>
          <Link className="mx-2 text-secondary" to="/">Home</Link>
        </nav>
      </section>
    </footer>
  )
}
