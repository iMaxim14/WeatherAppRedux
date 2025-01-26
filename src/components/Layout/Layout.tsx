import {
  Header,
  HeaderLogo,
  HeaderLogoWrapper,
  LayoutWrapper,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles"
import type { LayoutProps } from "./types"

function Layuot({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoWrapper>
          <HeaderLogo>Weather App</HeaderLogo>
        </HeaderLogoWrapper>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/history"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            History
          </StyledNavLink>
        </NavContainer>
      </Header>

      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layuot
