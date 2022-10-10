import styled from 'styled-components'

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    div {
        width: calc((100% / 2) - 2rem);
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    a {
        margin-bottom: 1.2rem;
        svg {
            min-width: 1.6rem;
        }
    }

    @media (max-width: 30rem) {
        flex-direction: column;
        div {
            width: 100%;
        }
    }
`

export default LinksContainer