import styled from 'styled-components'

const SwitcherContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.primaryText};
    letter-spacing: 0.2rem;
    cursor: pointer;

    svg {
        margin-left: 1rem;
        fill: ${props => props.theme.colors.primaryText};
    }

    :hover {
        color: ${props => props.theme.colors.tertiary};
        svg {
            fill: ${props => props.theme.colors.tertiary};
        }
    }
`
export default SwitcherContainer