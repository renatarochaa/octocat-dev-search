import React from 'react';
import { H2 } from '../../atoms/typography';
import ThemeSwitcher from '../../molecules/themeSwitcher';
import HeaderContainer from './styles';

const Header = () => (
    <HeaderContainer>
        <H2>devfinder</H2>
        <ThemeSwitcher />
    </HeaderContainer>
)

export default Header