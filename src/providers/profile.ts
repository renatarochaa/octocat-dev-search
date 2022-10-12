import { useState } from "react"
import { Profile } from "../interfaces"
import profileMapper from "../utils/profileMapper"
import usePersistedState from "../utils/usePersistedState"

const useProfileProvider = () => {
    const [profile, setProfile] = usePersistedState<Profile>('profile', {} as Profile)
    const [error, setError] = useState<string>('')

    const getProfileData = async (user: string) => {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()

        if (data.message) {
            setError('No results')
        } else {
            setProfile(profileMapper(data))
            setError('')
        }
    }

    return {
        profile,
        error,
        setError,
        getProfileData
    }
}

export default useProfileProvider