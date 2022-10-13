import { render, screen } from "@testing-library/react"
import React from "react"
import Header from "."
import TestWrapper from "../../../utils/testWrapper"

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