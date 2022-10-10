import styled from 'styled-components'

const InfoContainer = styled.div`
    margin: 0 0 3rem 3rem;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    
    h4 {
        margin-bottom: 1.3rem;
    }

    @media (max-width: 50rem) {
        margin: 4rem 0 3rem;
        div p {
            display: none;
        }
    }

    @media (max-width: 30rem) {
        margin: 3rem 0;
    }
`

export default InfoContainer