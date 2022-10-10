import styled from 'styled-components'

const Grid = styled.div`
    margin: 8rem auto;
    width: 100%;
    max-width: 53rem;

    @media (max-width: 60rem) {
        max-width: 90%;
    }

    @media (max-width: 30rem) {
        margin: 3rem auto;
    }
`

export default Grid