export interface ProfileUserInfo {
    name: string
    username: string
    profileUrl: string
    bio: string
    joinDate: string
}

export interface ProfileAvatar {
    url: string
    alt: string
}

export interface ProfileUserDataItem {
    number: number
    url?: string
}

export interface ProfileUserData {
    repositories: ProfileUserDataItem
    followers: ProfileUserDataItem
    following: ProfileUserDataItem
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