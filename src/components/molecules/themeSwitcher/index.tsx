import React from 'styled-components'
import Icon from '../../atoms/icon'
import { H4 } from '../../atoms/typography'
import SwitcherContainer from './styles'

const ThemeSwitcher = () => (
    <SwitcherContainer>
        <H4>LIGHT</H4>
        <Icon icon="sun" />
    </SwitcherContainer>
)

export default ThemeSwitcher