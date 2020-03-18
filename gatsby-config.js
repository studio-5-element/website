module.exports = {
    siteMetadata: {
        // edit below
        title: `Studio 5 Element`,
        author: `Wiktor Bednarz @CooperByte`,
        description: `Portfolio Aleksandry Jakubickiej - architekta wnętrz`,
        siteUrl: `https://studio5element.netlify.com/`,
        social: {
        twitter: `kylemathews`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: 'images',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/pages`,
                name: `pages`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {},
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [".mdx", ".md"],
                gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
                {
                    resolve: `gatsby-remark-responsive-iframe`,
                    options: {
                        wrapperStyle: `margin-bottom: 1.0725rem`,
                    },
                },
                {
                    resolve: `gatsby-remark-vscode`,
                },
                {
                    resolve: `gatsby-remark-copy-linked-files`,
                },
                {
                    resolve: `gatsby-remark-smartypants`,
                },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // edit below
                // trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        {
        resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Studio 5 Element`,
                short_name: `Studio 5 Element`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ff6e6e`,
                display: `minimal-ui`,
                // edit below
                icon: `content/assets/studio5logo.png`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-feed-mdx`,
    ],
}
