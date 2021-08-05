import { useStaticQuery, graphql } from "gatsby"

export const useConfigQuery = () => {
  const data = useStaticQuery(graphql`
    query configQuery {
      markdownRemark(frontmatter: { type: { eq: "config" } }) {
        frontmatter {
          logo {
            publicURL
          }
          menu {
            id
            link
            name
          }
        }
      }
    }
  `)

  return data.markdownRemark.frontmatter
}

// export default useConfigQuery
