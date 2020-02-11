import React from "react"
import Layout from "../components/Layout"
import { error as errorStyle } from "../css/error.module.css"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import { btnWhite } from "../css/layout.module.css"
import SimpleHero from "../components/SimpleHero"

const error = () => {
  return (
    <Layout>
      <header className={errorStyle}>
        <Banner
          title="oops nothing is here"
          
        >
          <Link to="/" className={btnWhite}>
            Go back to homepage
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
export default error
