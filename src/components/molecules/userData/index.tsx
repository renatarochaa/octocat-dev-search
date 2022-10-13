import React from 'react'

import Card from '../../atoms/card'
import { H4, Paragraph } from '../../atoms/typography'

import { ProfileUserData } from '../../../interfaces'

interface UserDataProps {
    data: ProfileUserData
}

const UserData = ({ data }: UserDataProps) => (
    <Card className="user-data">
        <div className="user-data__item">
            <H4>Repos</H4>
            <Paragraph info>{data.repositories}</Paragraph>
        </div>
        <div className="user-data__item">
            <H4>Followers</H4>
            <Paragraph info>{data.followers}</Paragraph>
        </div>
        <div className="user-data__item">
            <H4>Following</H4>
            <Paragraph info>{data.following}</Paragraph>
        </div>
    </Card>
)

export default UserData