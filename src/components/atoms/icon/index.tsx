import React from 'react'
import ICON_MAPPING, { IconItem } from './icon-mapping'

interface IconProps {
    icon: IconItem
}

const Icon = ({ icon }: IconProps) => {
    const IconPath = ICON_MAPPING[icon]

    return (
        <svg 
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            viewBox="0 0 1024 1024"
            aria-label={icon}
            role="img"
        >
            <IconPath />
        </svg>
    )
} 

export default Icon