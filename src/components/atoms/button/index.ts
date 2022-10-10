import styled, { css } from 'styled-components'

interface ButtonProps {
    inactive?: boolean;
}

const Button = styled.button<ButtonProps>`
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: ${props => props.theme.colors.tertiaryText};
    background-color: ${props => props.theme.colors.primary};
    font-family: 'Space Mono', monospace;
    font-weight: bold;
    border: none;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.colors.secondary};
    }

    ${props => props.inactive && css`
        background-color: ${props.theme.colors.secondary};
        cursor: default;
    `}
`
export default Button
