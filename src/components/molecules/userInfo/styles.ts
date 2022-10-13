import styled from 'styled-components'

const InfoContainer = styled.div`
    margin: 0 0 3rem 3rem;
    width: 100%;

    .info-container {
        &__title {
            display: flex;
            justify-content: space-between;
            align-items: center;    
            margin-bottom: 0.5rem;
        }
        &__bio {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
        }
        &__username {
            margin-bottom: 1.3rem;
        }
    }
    

    @media (max-width: 50rem) {
        margin: 4rem 0 3rem;
        .info-container__joindate {
            display: none;
        }
    }

    @media (max-width: 30rem) {
        margin: 3rem 0;
    }
`

export default InfoContainer