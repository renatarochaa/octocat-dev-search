import { ProfileProps } from "../interfaces/profile"
import usePersistedState from "../utils/usePersistedState"

const useProfileProvider = () => {
    const [profile, setProfile] = usePersistedState<ProfileProps>('profile', {} as ProfileProps)

    const getProfileData = async (user: string) => {        
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()

        setProfile(data)
    }

    return {
        profile,
        getProfileData
    }
}

export default useProfileProvider