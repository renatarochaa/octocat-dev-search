import React from 'react'
import ICON_MAPPING, { IconItem } from './icon-mapping'

interface IconProps {
    icon: IconItem
    medium?: boolean
}

const Icon = ({ icon, medium }: IconProps) => {
    const IconPath = ICON_MAPPING[icon]
    const iconSize = medium ? '30' : '20'

    return (
        <svg 
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 1024 1024"
            role="img"
        >
            <IconPath />
        </svg>
    )
} 

export default Icon