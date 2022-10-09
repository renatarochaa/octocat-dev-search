import styled, { css } from 'styled-components'

interface LinkProps {
    accent?: boolean;
    inactive?: boolean;
}

const Link = styled.a<LinkProps>`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.primaryText};
    text-decoration: none;

    svg { 
        margin-right: 1rem;
        fill: ${props => props.theme.colors.primaryText};        
    }

    :hover {
        text-decoration: ${props => props.href ? 'underline' : 'none'};
    }

    ${props => props.accent && css`
        color: ${props => props.theme.colors.primary};
    `}

    ${props => props.inactive && css`
        color: ${props => props.theme.colors.secondaryText};
        svg {
            fill: ${props => props.theme.colors.secondaryText};
        }
        :hover {
            text-decoration: none;
            cursor: default;
        }
    `}
`

export default Link