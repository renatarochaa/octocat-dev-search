import React from 'react';
import { H2 } from '../../atoms/typography';
import ThemeSwitcher from '../../molecules/themeSwitcher';
import HeaderContainer from './styles';

interface HeaderProps {
    toggleTheme: () => void
    theme: string
}

const Header = ({ toggleTheme, theme }: HeaderProps) => (
    <HeaderContainer>
        <H2>devfinder</H2>
        <ThemeSwitcher onClick={toggleTheme} theme={theme} />
    </HeaderContainer>
)

export default Header