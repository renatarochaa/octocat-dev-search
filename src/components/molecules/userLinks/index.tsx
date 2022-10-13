import React from 'react'

import Icon from '../../atoms/icon'
import Link from '../../atoms/link'
import { Paragraph } from '../../atoms/typography'

import { ProfileUserLinks } from '../../../interfaces'

import LinksContainer from './styles'

interface UserLinksProps {
    data: ProfileUserLinks
}

const UserLinks = ({ data }: UserLinksProps) => {
    const { location, website, twitter, company } = data

    return (
        <LinksContainer>
            <div>
                <Link inactive={!location.available}>
                    <Icon icon="location" />
                    <Paragraph>{location.content}</Paragraph>
                </Link>
                <Link inactive={!website.available} href={website.url} target="_blank">
                    <Icon icon="website" />
                    <Paragraph>{website.content}</Paragraph>
                </Link>
            </div>
            <div>
                <Link inactive={!twitter.available} href={twitter.url} target="_blank">
                    <Icon icon="twitter" />
                    <Paragraph>{twitter.content}</Paragraph>
                </Link>
                <Link inactive={!company.available} href={company.url} target="_blank">
                    <Icon icon="company" />
                    <Paragraph>{company.content}</Paragraph>
                </Link>
            </div>
        </LinksContainer>
    )
} 

export default UserLinks