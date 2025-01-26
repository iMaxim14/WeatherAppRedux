import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: linear-gradient(
      0deg,
      rgba(18, 45, 77, 0.5),
      rgba(18, 45, 77, 0.5)
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(17.8px);
  border-bottom: 1px solid rgba(210, 210, 210, 1);
`
export const HeaderLogoWrapper = styled.div``
export const HeaderLogo = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 25.5px;
  margin-left: 85px;
`

export const NavContainer = styled.nav`
  display: flex;
  margin-top: 28px;
  margin-right: 107px;
  gap: 63px;
`

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  color: white;
  text-decoration: none;
`

export const Main = styled.main`
  /* display: flex;
  flex-direction: column;
  flex: 1; */
`
