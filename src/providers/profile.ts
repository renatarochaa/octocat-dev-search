import { useState } from "react"

import profileMapper from "../utils/profileMapper"
import usePersistedState from "../utils/usePersistedState"

import { Profile } from "../interfaces"

const useProfileProvider = () => {
    const [profile, setProfile] = usePersistedState<Profile>('profile', {} as Profile)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const getProfileData = async (user: string) => {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()

        if (data.message) {
            setError('No results')
            setTimeout(() => setLoading(false), 500)
        } else {
            setProfile(profileMapper(data))
            setError('')
            setTimeout(() => setLoading(false), 500)
        }
    }

    return {
        profile,
        loading,
        error,
        setError,
        getProfileData
    }
}

export default useProfileProvider