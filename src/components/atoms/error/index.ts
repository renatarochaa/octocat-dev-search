import styled from 'styled-components'

const ErrorMessage = styled.p`
    font-size: 0.8rem;
    line-height: 2.5rem;
    font-weight: bold;
    white-space: nowrap;
    margin: 0 1rem;
    color: ${props => props.theme.colors.error};
`

export default ErrorMessage
