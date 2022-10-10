import styled from 'styled-components'

const ErrorMessage = styled.p`
    font-weight: bold;
    white-space: nowrap;
    margin: 0 2rem;
    color: ${props => props.theme.colors.error};

    @media (max-width: 30rem) {
        margin: 0 1rem;
    }
`

export default ErrorMessage
