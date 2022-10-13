import React from 'react'

import Icon from '../../atoms/icon'
import { H4 } from '../../atoms/typography'

import SwitcherContainer from './styles'

interface ThemeSwitcherProps {
    theme: string
    onClick: () => void
}

const ThemeSwitcher = ({ theme, onClick }: ThemeSwitcherProps) => {
    const themeName = theme.toUpperCase()
    const themeIcon = theme === 'dark' ? 'moon' : 'sun'

    return (
        <SwitcherContainer onClick={onClick}>
            <H4>{themeName}</H4>
            <Icon icon={themeIcon} />
        </SwitcherContainer>
    )
} 

export default ThemeSwitcher