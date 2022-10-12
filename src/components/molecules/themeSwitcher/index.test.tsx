import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import ThemeSwitcher from "."
import TestWrapper from "../../../utils/testWrapper"

const theme = 'dark'
const onClick = jest.fn()

const ThemeSwitcherTest = () => 
    <TestWrapper>
        <ThemeSwitcher theme={theme} onClick={onClick} />
    </TestWrapper>

describe('<ThemeSwitcher />', () => {
    
    it('should render correctly', () => {
        render(<ThemeSwitcherTest />)

        expect(screen.getByRole('button', { name: /DARK/ })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'moon' })).toBeInTheDocument()
    })

    it('should call onClick function when the button is clicked', () => {
        render(<ThemeSwitcherTest />)
        
        const toggleButton = screen.getByRole('button', { name: /DARK/ })

        userEvent.click(toggleButton)
        expect(onClick).toBeCalled()
    })
})