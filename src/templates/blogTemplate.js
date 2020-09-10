import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  console.log("markdownRemark", markdownRemark);
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