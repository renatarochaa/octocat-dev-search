import styled, { css } from 'styled-components'

interface SkeletonItemProps {
    width?: string
    height?: string
    margin?: string
    image?: boolean
}

const SkeletonItem = styled.span<SkeletonItemProps>`
    @keyframes shine-lines {
        0% {
            background-position: 0;
        }

        100% {
            background-position: 30rem;
        }
    }

    animation: shine-lines 2s 2s infinite linear;
    color: ${props => props.theme.colors.secondaryText};
    opacity: 0.3;
    background-image: linear-gradient(90deg, currentColor 0px, lightgrey, currentColor 12rem);
    border-radius: 0.5rem;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};

    ${props => props.image && css`
        min-width: 9rem;
        height: 9rem;
        border-radius: 100%;

        @media (max-width: 50rem) {
            min-width: 12rem;
            height: 12rem;
        }

        @media (max-width: 30rem) {
            min-width: 8rem;
            height: 8rem;
        }
    `}
`

export default SkeletonItem