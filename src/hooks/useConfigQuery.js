import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useConfigQuery = () => {
  const data = useStaticQuery(graphql`
    {
      query
      configQuery {
        markdownRemark(frontmatter: { type: { eq: "config" } }) {
          frontmatter {
            logo
            menu {
              id
              link
              name
            }
          }
        }
      }
    }
  `)

  return data.markdownRemark.frontmatter
}

// export default useConfigQuery
