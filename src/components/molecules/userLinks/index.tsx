import React from 'react'
import Icon from '../../atoms/icon'
import Link from '../../atoms/link'
import { Paragraph } from '../../atoms/typography'
import LinksContainer from './styles'

const UserLinks = () => (
    <LinksContainer>
        <div>
            <Link>
                <Icon icon="location" />
                <Paragraph>San Francisco</Paragraph>
            </Link>
            <Link href="https://github.com/" target="_blank">
                <Icon icon="website" />
                <Paragraph>https://github.com/dlfjsdlçsjdçglksjd</Paragraph>
            </Link>
        </div>
        <div>
            <Link inactive>
                <Icon icon="twitter" />
                <Paragraph>Not available</Paragraph>
            </Link>
            <Link href="https://github.com/" target="_blank">
                <Icon icon="company" />
                <Paragraph>@github</Paragraph>
            </Link>
        </div>
    </LinksContainer>
)

export default UserLinks