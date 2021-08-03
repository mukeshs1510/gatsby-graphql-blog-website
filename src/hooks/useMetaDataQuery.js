import React from "react"

import { useStaticQuery, graphql } from "gatsby"

export const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}

// export default useMetaDataQuery
