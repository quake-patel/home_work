const initialState = 0

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - 1;
        case "ENTERTEXT": return action.payloadSecond;
        default: return state
    }
}
const initialStateStr = ''
const enterStr = (state = initialStateStr, action) => {
    switch (action.type) {
        case "ENTERTEXT": return state + action.payloadSecond;
        default: return state
    }
}

export default (changeTheNumber, enterStr)
