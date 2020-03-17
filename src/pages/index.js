import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Carousel from "../components/homePage/Carousel";

const IndexPage = ({ data, location }) => {
    console.log(data);
    const siteTitle = "Gatsby Starter Personal Website";

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title="Home"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <Carousel />
            <div style={{ height: '2000px' }}/>
            <p>text for testing</p>
        </Layout>
    )
};

export default IndexPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
