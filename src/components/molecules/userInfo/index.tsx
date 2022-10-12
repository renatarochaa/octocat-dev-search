import React from 'react'
import { ProfileUserInfo } from '../../../interfaces'
import Link from '../../atoms/link'
import { H1, H4, Paragraph } from '../../atoms/typography'
import InfoContainer from './styles'

interface UserInfoProps {
    data: ProfileUserInfo
}

const userInfo = ({ data }: UserInfoProps) => (
    <InfoContainer>
        <div>
            <H1>{data.name}</H1>
            <Paragraph>{data.joinDate}</Paragraph>
        </div>
        <Link href={data.profileUrl} target="_blank" accent>
            <H4>{data.username}</H4>
        </Link>
        <Paragraph inactive={!data.hasBio}>{data.bio}</Paragraph>
    </InfoContainer>
)

export default userInfo