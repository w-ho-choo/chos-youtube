import React from 'react'

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

import { headerMenus, searchKeyword, snsLink } from '../../data/header'

const Header = () => {

  return (
    <header id='header' role='banner'>
      <Logo />
      <Menu headerMenus={headerMenus} searchKeyword={searchKeyword} />
      <Sns snsLink={snsLink} />
    </header>
  )
}

export default Header