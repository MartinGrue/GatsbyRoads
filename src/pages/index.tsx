import React from "react"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import * as css from "../components/css/layout.module.css"
import {btnWhite} from "../css/layout.module.css"
import About from "../components/HomePageComponents/About"
import Services from "../components/HomePageComponents/Services"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="start exploring"
        info="Lorem ipsum dolor sit amet consecteuer adi"
      >
        <Link to="/tours" className={btnWhite}>
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About></About>
    <Services></Services>
  </Layout>
)
