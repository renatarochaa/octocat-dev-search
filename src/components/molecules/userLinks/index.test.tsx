import React from "react"

import { render, screen } from "@testing-library/react"

import TestWrapper from "../../../utils/testWrapper"

import UserLinks from "."

const testData = {
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

const UserLinksTest = () => 
    <TestWrapper>
        <UserLinks data={testData} />
    </TestWrapper>

describe('<UserLinks />', () => {
    
    it('should render correctly', () => {
        render(<UserLinksTest />)

        expect(screen.getByRole('link', { name: /github.blog/ })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /@github/ })).toBeInTheDocument()
        expect(screen.getByText('San Francisco')).toBeInTheDocument()
        expect(screen.getByText('Not available')).toBeInTheDocument()

        expect(screen.getByRole('img', { name: 'location' })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'website' })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'twitter' })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'company' })).toBeInTheDocument()
    })

    it('should have external links when it is available', () => {
        render(<UserLinksTest />)

        const websiteLink = screen.getByRole('link', { name: /github.blog/ })
        const companyLink = screen.getByRole('link', { name: /@github/ })

        expect(websiteLink).toHaveAttribute('href', 'https://github.blog')
        expect(companyLink).toHaveAttribute('href', 'https://github.com/github')

        expect(websiteLink).toHaveAttribute('target', '_blank')
        expect(companyLink).toHaveAttribute('target', '_blank')
    })
})