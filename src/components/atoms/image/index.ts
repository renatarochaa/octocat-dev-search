import styled from 'styled-components'

const Image = styled.img`
    width: 9rem;
    height: 9rem;
    border-radius: 100%;

    @media (max-width: 50rem) {
        width: 12rem;
        height: 12rem;
    }

    @media (max-width: 30rem) {
        width: 8rem;
        height: 8rem;
    }
`

export default Image