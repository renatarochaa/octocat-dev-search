import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 1rem;
    padding: 3rem;
    background-color: ${props => props.theme.colors.backgroundLight};

    &.search-bar {
        padding: 1rem 1rem 1rem 2.5rem;
        margin-bottom: 2rem;
        svg {
            fill: ${props => props.theme.colors.primary};
            min-width: 2rem;
        }
    }

    &.user-data {
        padding: 1.5rem 3rem;
        justify-content: space-between;
        background-color: ${props => props.theme.colors.background};
    }

    &.profile {
        flex-direction: column;
        .user-info {
            display: flex;
            width: 100%;
        }
        .user-links {
            padding-left: 12rem;
            width: 100%;
        }
    }

    @media (max-width: 50rem) {
        &.profile {
            .user-info {
                flex-direction: column;
                align-items: center;
            }
            .user-links {
                padding: 0;
            }
        }
    }

    @media (max-width: 30rem) {
        padding: 2rem;
        &.user-data {
            padding: 1rem 1.5rem;
        }
        &.search-bar {
            padding: 1rem 1rem 1rem 2rem;
            svg {
                min-width: 1.6rem;
            }
        }
    }
`

export default Card