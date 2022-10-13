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
        <div className="info-container__title">
            <H1>{data.name}</H1>
            <Paragraph className="info-container__joindate">{data.joinDate}</Paragraph>
        </div>
        <Link href={data.profileUrl} target="_blank" accent>
            <H4 className="info-container__username">{data.username}</H4>
        </Link>
        <Paragraph inactive={!data.hasBio}>{data.bio}</Paragraph>
    </InfoContainer>
)

export default userInfo