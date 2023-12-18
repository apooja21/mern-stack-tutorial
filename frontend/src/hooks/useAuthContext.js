import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuthContext = () => {
	const authContext = useContext(AuthContext)

	if (!authContext) {
		throw Error('useAuthContext must be inside the AuthContextProvider')
	}
	return authContext
}
