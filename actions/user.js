
export const user_login = () => {
	return (dispatch) => {
		console.log("login")
		dispatch({
			type: "LOGIN",
			payload: 'Jhdif83V8042dhd'
		})
    }
}

export const user_logout = () => {
	return (dispatch) => {
		console.log("logout")
		dispatch({
			type: "LOGOUT",
		})
    }
}