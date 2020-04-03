import React from "react"
import Layout from "../components/Layout"
import { StaticQuery, graphql, Link } from "gatsby"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { btnWhite } from "../css/layout.module.css"

const tours = () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query {
            defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <StyledHero
              isHome={false}
              img={data.defaultBcg.childImageSharp.fluid}
            >
              <Banner
                title="start exploring"
                info="Lorem ipsum dolor sit amet consecteuer adi"
              >
                <Link to="/tours" className={btnWhite}>
                  explore tours
                </Link>
              </Banner>
            </StyledHero>
          )
        }}
      ></StaticQuery>
    </Layout>
  )
}
export default tours
