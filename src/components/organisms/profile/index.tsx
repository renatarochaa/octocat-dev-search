import React from 'react'

import Card from '../../atoms/card'
import Image from '../../atoms/image'
import UserData from '../../molecules/userData'
import UserInfo from '../../molecules/userInfo'
import UserLinks from '../../molecules/userLinks'

import { Profile } from '../../../interfaces'

interface ProfileContentProps {
    data: Profile
}

const ProfileContent = ({ data }: ProfileContentProps) => {
    const { avatar, userInfo, userData, userLinks } = data

    return (
        <Card className="profile">
            <div className="user-info">
                <Image src={avatar.url} alt={avatar.alt}  />
                <UserInfo data={userInfo} />
            </div>
            <div className="user-links">
                <UserData data={userData} />
                <UserLinks data={userLinks} />
            </div>
        </Card>
    )
}

export default ProfileContent