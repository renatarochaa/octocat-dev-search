import { Profile } from "../interfaces"
import profileMapper from "../utils/profileMapper"
import usePersistedState from "../utils/usePersistedState"

const useProfileProvider = () => {
    const [profile, setProfile] = usePersistedState<Profile>('profile', {} as Profile)

    const getProfileData = async (user: string) => {        
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()

        setProfile(profileMapper(data))
    }

    return {
        profile,
        getProfileData
    }
}

export default useProfileProvider