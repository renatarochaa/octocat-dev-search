import React, { useState } from 'react'
import useProfileProvider from '../../../providers/profile'
import Button from '../../atoms/button'
import Card from '../../atoms/card'
import ErrorMessage from '../../atoms/error'
import Icon from '../../atoms/icon'
import Input from '../../atoms/input'

const SearchBar = () => {
    const { error, setError, getProfileData } = useProfileProvider()
    const [search, setSearch] = useState<string>('')

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setError('')
    }

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        getProfileData(search)
    }

    return (
        <Card className="search-bar">
            <Icon icon="search" />
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Search GitHub username..."
                />
                <ErrorMessage>{error}</ErrorMessage>
                <Button type="submit">Search</Button> 
            </form>
        </Card>
    )
} 

export default SearchBar