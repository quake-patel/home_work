const initialState = ''
const changeTheLogin = (state = initialState, action) => {
    switch (action.type) {
        case "LOGINDATA": return state + action.payload;
        default: return state
    }
}

export default (changeTheLogin)
