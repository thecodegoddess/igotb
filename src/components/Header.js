import React from 'react';
import Icon from '../lib/Icon';
import { SVGS } from '../config';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <Icon
      cssClass="c-title"
      icon={SVGS.TITLE}
      viewBox="-25 -25 725 90"
    />
  </header>
);

export default Header;
