import React from 'react'
import Card from '../../atoms/card'
import { H4, Paragraph } from '../../atoms/typography'

const UserData = () => (
    <Card internal padding="1.5rem 3rem">
        <div>
            <H4>Repos</H4>
            <Paragraph info>8</Paragraph>
        </div>
        <div>
            <H4>Followers</H4>
            <Paragraph info>3938</Paragraph>
        </div>
        <div>
            <H4>Following</H4>
            <Paragraph info>9</Paragraph>
        </div>
    </Card>
)

export default UserData