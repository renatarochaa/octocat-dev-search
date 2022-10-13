import React from "react"

import { render, screen } from "@testing-library/react"

import TestWrapper from "../../../utils/testWrapper"

import ProfileContent from "."

const testData = {
    avatar: {
        url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        alt: 'The Octocat'
    },
    userInfo: {
        name: 'The Octocat',
        username: '@octocat',
        profileUrl: 'https://github.com/octocat',
        bio: 'This profile has no bio',
        hasBio: false,
        joinDate: 'Joined 25 Jan 2011'
    },
    userData: {
        repositories: 8,
        followers: 7253,
        following: 9
    },
    userLinks: {
        location: {
            available: true,
            content: 'San Francisco'
        },
        website: {
            available: true,
            content: 'https://github.blog',
            url: 'https://github.blog'
        },
        twitter: {
            available: false,
            content: 'Not available',
            url: undefined
        },
        company: {
            available: true,
            content: '@github',
            url: 'https://github.com/github'
        }
    }
}

const ProfileContentTest = () => 
    <TestWrapper>
        <ProfileContent data={testData} />
    </TestWrapper>

describe('<ProfileContent />', () => {
    
    it('should render correctly', () => {
        render(<ProfileContentTest />)

        expect(screen.getByRole('heading', { name: 'The Octocat' })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'The Octocat' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: '@octocat' })).toBeInTheDocument()

        expect(screen.getByRole('heading', { name:'Repos' })).toBeInTheDocument()
        expect(screen.getByText('8')).toBeInTheDocument()

        expect(screen.getByRole('link', { name: /github.blog/ })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'website' })).toBeInTheDocument()
    })
})