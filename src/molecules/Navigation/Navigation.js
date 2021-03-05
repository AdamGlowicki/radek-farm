import React from "react"
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #fff;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  span {
     margin-right: 10px;
     font-size: 20px;
     font-weight: 500;
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
`

const Li = styled.li`
  font-weight: 500;
  font-size: 15px;
  margin-left: 32px;
`

const activeClassName = 'nav-item-active'
const NavLink = styled(Link).attrs({
  activeClassName
})`
  &.${activeClassName} {
    font-weight: 700;
  }
  
`

const Navigation = () => {
  return (
    <Nav>
      <span><NavLink to='/'>logo</NavLink></span>
      <Ul>
        <Li>
          <NavLink to='/articles'>articles</NavLink>
        </Li>
        <Li>
          <NavLink to='/about' >about</NavLink>
        </Li>
        <Li>
          <NavLink to='gallery' >gallery</NavLink>
        </Li>
        <Li>
          <NavLink to='contact' >contact</NavLink>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Navigation