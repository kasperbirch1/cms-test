import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log('frontmatter', frontmatter)
  console.log('html', html)

  return (
    <section className="wrapper">
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div>Publish Date: {frontmatter.date}</div>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}

export const pageQuery = graphql`
  query SingleBlogQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        galleryImages
      }
      html
    }
  }
`
