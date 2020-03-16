import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ data, location }) => {
    console.log(data);
    const siteTitle = "Gatsby Starter Personal Website";

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title="Home"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <div style={{ height: '2000px' }}/>
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
