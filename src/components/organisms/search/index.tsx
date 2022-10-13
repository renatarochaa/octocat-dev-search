import React from 'react'
import Button from '../../atoms/button'
import Card from '../../atoms/card'
import ErrorMessage from '../../atoms/error'
import Icon from '../../atoms/icon'
import Input from '../../atoms/input'

interface SearchBarProps {
    search: string
    error: string
    onSubmit: (e:React.ChangeEvent<HTMLFormElement>) => void
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ search, error, onSubmit, onChange }: SearchBarProps) => (
    <Card className="search-bar">
        <Icon icon="search" />
        <form onSubmit={onSubmit} role="search">
            <Input 
                type="text"
                value={search}
                onChange={onChange}
                spellCheck={false}
                placeholder="Search GitHub username..."
                aria-label="Search GitHub username..."
                autoFocus
            />
            <ErrorMessage>{error}</ErrorMessage>
            <Button type="submit">Search</Button> 
        </form>
    </Card>
)

export default SearchBar