import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
const StyledBloglistSection = styled.section`
   
`

const Bloglist = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              path
              date
            }
            html
          }
        }
      }  
    `)
    const { nodes } = data.allMarkdownRemark
    console.log("fisse", nodes);
    return (
        <StyledBloglistSection>
            <ul>
                {nodes.map((element, index) => {
                    return (
                        <li key={index}>
                            <p>{element.frontmatter.title}</p>
                        </li>
                    )
                })}
            </ul>
        </StyledBloglistSection>
    )
}

export default Bloglist
