import styled from 'styled-components'

const Input = styled.input`
    font-family: 'Space Mono', monospace;
    font-size: 1.3rem;
    border: none;
    width: 100%;
    margin-left: 2rem;
    caret-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.title === 'light' ? 
        props.theme.colors.tertiary : 
        props.theme.colors.primaryText
    };

    ::placeholder {
        color: ${props => props.theme.colors.primaryText};
    }

    :focus {
        outline: none;
    }

    @media (max-width: 30rem) {
        font-size: 1.2rem;
        margin-left: 1rem;
    }
`

export default Input