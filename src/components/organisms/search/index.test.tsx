import React from "react"

import userEvent from "@testing-library/user-event"
import { fireEvent, render, screen } from "@testing-library/react"

import TestWrapper from "../../../utils/testWrapper"

import SearchBar from "."

const testData = {
    search: '',
    error: 'No results',
    onSubmit: jest.fn(),
    onChange: jest.fn()
}

const SearchBarTest = () => 
    <TestWrapper>
        <SearchBar {...testData} />
    </TestWrapper>

describe('<SearchBar />', () => {
    
    it('should render correctly', () => {
        render(<SearchBarTest />)

        expect(screen.getByRole('search')).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: 'Search GitHub username...' })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'search' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
        expect(screen.getByText('No results')).toBeInTheDocument()
    })

    it('should call onChange function on input change', () => {
        render(<SearchBarTest />)

        const searchInput = screen.getByRole('textbox', { name: 'Search GitHub username...' })

        fireEvent.change(searchInput, { target: { value: 'octocat' }})
        expect(testData.onChange).toBeCalled()
    })

    it('should call onSubmit function on form submit', () => {
        render(<SearchBarTest />)

        const searchForm = screen.getByRole('search')

        fireEvent.submit(searchForm)
        expect(testData.onSubmit).toBeCalled()
    })

    it('should call onSubmit function when the button is clicked', () => {
        render(<SearchBarTest />)
        
        const searchButton = screen.getByRole('button', { name: 'Search' })

        userEvent.click(searchButton)
        expect(testData.onSubmit).toBeCalled()
    })
})