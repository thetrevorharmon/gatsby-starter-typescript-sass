module.exports = {
  siteMetadata: {
    name: `Hello Typescript World!`,
    tagline: `Gatsby + SASS + Typescript = 💪`
  },  
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        transpileOnly: true, // default
        compilerOptions: {
          target: `es6`,
          experimentalDecorators: true,
          jsx: `react`,
        }, // default
      },
    },    
    // `gatsby-plugin-typescript-scss-modules`,
  ],
}
