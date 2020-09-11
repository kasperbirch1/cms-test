import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
const StyledBloglistSection = styled.section``

const Bloglist = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)
  const { nodes } = data.allMarkdownRemark
  // console.log("nodes", nodes);
  return (
    <StyledBloglistSection>
      <ul>
        {nodes.map((element, index) => {
          return (
            <li key={index}>
              <Link to={element.fields.slug}>
                <p>{element.frontmatter.title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledBloglistSection>
  )
}

export default Bloglist
