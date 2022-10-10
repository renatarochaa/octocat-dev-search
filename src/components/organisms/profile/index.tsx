import React from 'react'
import Card from '../../atoms/card'
import Image from '../../atoms/image'
import UserData from '../../molecules/userData'
import UserInfo from '../../molecules/userInfo'
import UserLinks from '../../molecules/userLinks'

const Profile = () => (
    <Card className="profile">
        <div className="user-info">
            <Image src="https://avatars.githubusercontent.com/u/583231?v=4" alt="octocat"  />
            <UserInfo />
        </div>
        <div className="user-links">
            <UserData />
            <UserLinks />
        </div>
    </Card>
)

export default Profile