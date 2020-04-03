import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link, StaticQuery } from "gatsby"
import { btnWhite } from "../css/layout.module.css"
import About from "../components/HomePageComponents/About"
import Services from "../components/HomePageComponents/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import { IFluidObject } from "gatsby-background-image"

interface HeaderProps {
  className: string
}
interface HeaderPropsWithData extends HeaderProps {
  defaultBcg: {
    childImageSharp: {
      fluid: IFluidObject | IFluidObject[] | (IFluidObject | string)[]
    }
  }
}

const index: React.SFC<HeaderPropsWithData> = () => {
  return (
    <Layout>
      <StaticQuery<HeaderPropsWithData>
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
              isHome={true}
              img={data!.defaultBcg.childImageSharp.fluid}
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
      <About></About>
      <Services></Services>
    </Layout>
  )
}
export default index
