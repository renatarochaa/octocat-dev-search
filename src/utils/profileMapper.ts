import { Profile } from "../interfaces"
import { ProfileData } from "../interfaces"

const profileMapper = (data: ProfileData): Profile => {
    const name = data.name || data.login
    const notAvailableContent = 'Not available'
    
    const getJoinDate = (date: Date): string => 
        new Date(date).toLocaleDateString('en-au', { 
            day: 'numeric',
            month: 'short',
            year: 'numeric' 
        })
    
    return data.message ? 
    { errorMessage: 'No results' } : 
    {
        avatar: {
            url: data.avatar_url,
            alt: name
        },
        userInfo: {
            name,
            username: `@${data.login}`,
            profileUrl: data.html_url,
            bio: data.bio || 'This profile has no bio',
            joinDate: `Joined ${getJoinDate(data.created_at)}`
        },
        userData: {
            repositories: {
                number: data.public_repos,
                url: data.repos_url
            },
            followers: {
                number: data.followers,
                url: data.followers_url
            },
            following: {
                number: data.following
            } 
        },
        userLinks: {
            location: {
                available: !!data.location,
                content: data.location || notAvailableContent
            },
            website: {
                available: !!data.blog,
                content: data.blog || notAvailableContent,
                url: data.blog
            },
            twitter: {
                available: !!data.twitter_username,
                content: data.twitter_username ? `@${data.twitter_username}` : notAvailableContent,
                url: data.twitter_username && `https://twitter.com/${data.twitter_username}`
            },
            company: {
                available: !!data.company,
                content: data.company || notAvailableContent,
                url: data.company && `https://github.com/${data.company.replace('@', '')}`
            }
        },
    }

}

export default profileMapper