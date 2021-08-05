import React from "react"
import { Link } from "gatsby"
import { useConfigQuery } from "hooks/useConfigQuery"
import { Wrapper, Logo } from "./Header.styles"
import Menu from "components/Menu"

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useConfigQuery()
  return (
    <Wrapper>
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
    </Wrapper>
  )
}

export default Header
