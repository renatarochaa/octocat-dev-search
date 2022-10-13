import React from "react"

import { render, screen } from "@testing-library/react"
import TestWrapper from "../../../utils/testWrapper"

import UserInfo from "."

const testData = {
    bio: "This profile has no bio",
    hasBio: false,
    joinDate: "Joined 25 Jan 2011",
    name: "The Octocat",
    profileUrl: "https://github.com/octocat",
    username: "@octocat"
}

const UserInfoTest = () => 
    <TestWrapper>
        <UserInfo data={testData} />
    </TestWrapper>

describe('<UserInfo />', () => {
    
    it('should render correctly', () => {
        render(<UserInfoTest />)

        expect(screen.getByRole('heading', { name: 'The Octocat' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: '@octocat' })).toBeInTheDocument()
        expect(screen.getByText('Joined 25 Jan 2011')).toBeInTheDocument()
        expect(screen.getByText('This profile has no bio')).toBeInTheDocument()
    })

    it('should have a link to user GitHub page', () => {
        render(<UserInfoTest />)
        
        expect(screen.getByRole('link', { name: '@octocat' })).toHaveAttribute('href', 'https://github.com/octocat')
    })
})