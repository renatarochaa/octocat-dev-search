import styled, { css } from 'styled-components'

interface CardProps {
    padding?: string;
    internal?: boolean;
}

const Card = styled.div<CardProps>`
    display: flex;
    width: 100%;
    border-radius: 1rem;
    padding: ${props => props.padding ? props.padding : '2rem'};
    background-color: ${props => props.theme.colors.backgroundLight};
    
    ${props => props.internal && css`
        justify-content: space-between;
        background-color: ${props => props.theme.colors.background};
    `}
`

export default Card