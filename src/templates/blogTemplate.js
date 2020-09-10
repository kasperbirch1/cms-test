import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Template({ data }) {
  console.log("data", data);
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div>Publish Date: {frontmatter.date}</div>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`