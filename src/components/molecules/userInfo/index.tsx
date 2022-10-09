import React from 'react'
import Link from '../../atoms/link'
import { H1, H4, Paragraph } from '../../atoms/typography'
import InfoContainer from './styles'

const userInfo = () => (
    <InfoContainer>
        <div>
            <H1>The Octocat</H1>
            <Paragraph>Joined 25 Jan 2011</Paragraph>
        </div>
        <Link href="https://github.com/" target="_blank" accent>
            <H4>@octocat</H4>
        </Link>
        <Paragraph inactive>This profile has no bio</Paragraph>
    </InfoContainer>
)

export default userInfo