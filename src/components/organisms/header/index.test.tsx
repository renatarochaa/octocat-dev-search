import React from "react"

import { render, screen } from "@testing-library/react"

import TestWrapper from "../../../utils/testWrapper"

import Header from "."

const theme = 'dark'
const onClick = jest.fn()

const HeaderTest = () => 
    <TestWrapper>
        <Header theme={theme} toggleTheme={onClick} />
    </TestWrapper>

describe('<Header />', () => {
    
    it('should render correctly', () => {
        render(<HeaderTest />)

        expect(screen.getByRole('heading', { name: 'devfinder' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /DARK/ })).toBeInTheDocument()
    })
})