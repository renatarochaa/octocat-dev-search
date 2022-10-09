import company from '../../../assets/icons/company';
import location from '../../../assets/icons/location'
import moon from '../../../assets/icons/moon'
import search from '../../../assets/icons/search'
import sun from '../../../assets/icons/sun'
import twitter from '../../../assets/icons/twitter'
import website from '../../../assets/icons/website'

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