export interface ProfileUserInfo {
    name: string
    username: string
    profileUrl: string
    bio: string
    hasBio: boolean
    joinDate: string
}

export interface ProfileAvatar {
    url: string
    alt: string
}

export interface ProfileUserData {
    repositories: number
    followers: number
    following: number
}

export interface ProfileUserLinksItem {
    available: boolean
    content: string
    url?: string
}

export interface ProfileUserLinks {
    location: ProfileUserLinksItem
    website: ProfileUserLinksItem
    twitter: ProfileUserLinksItem
    company: ProfileUserLinksItem
}

export interface Profile {
    avatar: ProfileAvatar
    userInfo: ProfileUserInfo
    userData: ProfileUserData
    userLinks: ProfileUserLinks
}
