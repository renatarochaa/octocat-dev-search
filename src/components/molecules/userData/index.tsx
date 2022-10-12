import React from 'react'
import { ProfileUserData } from '../../../interfaces'
import Card from '../../atoms/card'
import { H4, Paragraph } from '../../atoms/typography'

interface UserDataProps {
    data: ProfileUserData
}

const UserData = ({ data }: UserDataProps) => (
    <Card className="user-data">
        <div>
            <H4>Repos</H4>
            <Paragraph info>{data.repositories}</Paragraph>
        </div>
        <div>
            <H4>Followers</H4>
            <Paragraph info>{data.followers}</Paragraph>
        </div>
        <div>
            <H4>Following</H4>
            <Paragraph info>{data.following}</Paragraph>
        </div>
    </Card>
)

export default UserData