import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ location }) => {
    const siteTitle = "Gatsby Starter Personal Website";

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title="Home"
                keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
        </Layout>
    )
};

export default IndexPage
