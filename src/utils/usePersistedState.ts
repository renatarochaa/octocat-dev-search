import { useEffect, useState, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

const usePersistedState = <T>(key: string, initialState: T): Response<T> => {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key)

        return storedValue ? JSON.parse(storedValue) : initialState
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState