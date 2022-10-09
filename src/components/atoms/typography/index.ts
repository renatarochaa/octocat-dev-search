import styled, { css } from 'styled-components';

interface ParagraphProps {
    inactive?: boolean;
    info?: boolean;
}

export const H1 = styled.h1`
    font-size: 2rem;
    line-height: 3rem;
    font-weight: bold;
`

export const H2 = styled.h2`
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-weight: bold;
`

export const H3 = styled.h3`
    font-size: 1.2rem;
    line-height: 1.8rem;
`

export const H4 = styled.h4`
    line-height: 1.5rem;
`

export const Paragraph = styled.p<ParagraphProps>`
    font-size: 1.15rem;
    line-height: 2rem;

    ${props => props.inactive && css`
        color: ${props => props.theme.colors.secondaryText}
    `}

    ${props => props.info && css`
        font-size: 2rem;
        line-height: 3rem;
        font-weight: bold;
    `}
`