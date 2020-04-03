import React from "react"
import Layout from "../components/Layout"
import { StaticQuery, graphql, Link } from "gatsby"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { btnWhite } from "../css/layout.module.css"
import ContactForm from "../components/ContactPageComponents/ContactForm"

const contact = () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query {
            connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
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
            <div>
              <StyledHero
                isHome={false}
                img={data.connectBcg.childImageSharp.fluid}
              ></StyledHero>
              <ContactForm></ContactForm>
            </div>
          )
        }}
      ></StaticQuery>
    </Layout>
  )
}
export default contact
