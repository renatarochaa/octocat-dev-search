import React from "react"

import { render, screen } from "@testing-library/react"

import TestWrapper from "../../../utils/testWrapper"

import UserData from "."

const testData = {
    repositories: 10,
    followers: 15,
    following: 20
}

const UserDataTest = () => 
    <TestWrapper>
        <UserData data={testData} />
    </TestWrapper>

describe('<UserData />', () => {
    
    it('should render Repositories correctly', () => {
        render(<UserDataTest />)

        expect(screen.getByRole('heading', { name:'Repos' })).toBeInTheDocument()
        expect(screen.getByText('10')).toBeInTheDocument()
    })

    it('should render Followers correctly', () => {
        render(<UserDataTest />)

        expect(screen.getByRole('heading', { name:'Followers' })).toBeInTheDocument()
        expect(screen.getByText('15')).toBeInTheDocument()
    })

    it('should render Following correctly', () => {
        render(<UserDataTest />)

        expect(screen.getByRole('heading', { name:'Following' })).toBeInTheDocument()
        expect(screen.getByText('20')).toBeInTheDocument()
    })
})