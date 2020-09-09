require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// require("dotenv").config({
//   path: `env.${process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0}`
// })
// require("dotenv").config({
//   sitePath: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: `Dev-gatsby`,
    siteUrl: `https://gatsby.dev.cc/`,
    description: `this is an website`,
    author: `Ehsanghaffarii`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Dev-gatsby`,
        short_name: `Dev-gatsby`,
        description: `Manifest description`,
        start_url: `http://localhost:8000`,
        background_color: "#1b1d25",
        theme_color: "#ff7043",
        display: "standalone",
        icons: [{
            src: "/logos/favicon.png",
            sizes: "150x150",
            type: "image/png"
          },
          {
            src: "/logos/favicon.svg",
            sizes: "150x150",
          }
        ]
      }
    },


    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL ||
          `https://api.fotokar.ir/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit: process.env.NODE_ENV === `production` ? // Lets just pull 50 posts in development to make it easy on ourselves.
              50 : // and we don't actually need more than 5000 in production for this particular site
              5000,
          },
        },
      },
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}

// Cache headers config 
'use strict';
exports.handler = ({event, context, callback}) => {
  const request = event.Records[0].cf.request;
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  if (request.uri.startsWith('/static/')) {
    headers['cache-control'] = [
      {
        key:'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ];
  } else {
    headers['cache-control'] = [
      {
        key:'Cache-Control',
        value: 'public, max-age=0, must-revalidate'
      }
    ];
  }

  callback(null, response);
};

// Redirects config for can request to url without denoting html file on the end
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const uri = request.uri;

  if (url.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!url.includes('.')) {
    request.uri += '/index.html';
  }

  callback(null, request);
}