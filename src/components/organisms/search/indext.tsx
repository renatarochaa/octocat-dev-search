import React from 'react'
import Button from '../../atoms/button'
import Card from '../../atoms/card'
import ErrorMessage from '../../atoms/error'
import Icon from '../../atoms/icon'
import Input from '../../atoms/input'

const SearchBar = () => (
    <Card className="search-bar">
        <Icon icon="search" size="40" />
        <Input type="text" placeholder="Search GitHub username..." />
        <ErrorMessage>No results</ErrorMessage>
        <Button>Search</Button>
    </Card>
)

export default SearchBar