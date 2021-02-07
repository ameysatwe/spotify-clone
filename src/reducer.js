export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// Make it null after dev
	token:
		"BQCyW4UE20w1Knd0Jt1rUr_8YcRh0xZak_UFdGOxAhFHrT_3mA…zgchVm_7S_xUQYQM5a_bfWk8nKN1Bgro3y31iLJqEv2JjYEZq",
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
