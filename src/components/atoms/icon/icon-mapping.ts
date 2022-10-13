import sun from '../../../assets/icons/sun'
import moon from '../../../assets/icons/moon'
import search from '../../../assets/icons/search'
import twitter from '../../../assets/icons/twitter'
import company from '../../../assets/icons/company';
import website from '../../../assets/icons/website'
import location from '../../../assets/icons/location'

export type IconItem = keyof typeof ICON_MAPPING

const ICON_MAPPING = {
    company,
    location,
    moon,
    search,
    sun,
    twitter,
    website
}

export default ICON_MAPPING