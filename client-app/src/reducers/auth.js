export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                inProgess: false,
                errors: action.error ? action.payload : null
            };
            //need to handle some error.
        }
        case "ASYNC_START":
            if (action.subtype === "LOGIN" || action.subtype === "REGISTER") {
                return { ...state, inProgress: true };
            } else {
                return state;
            }
        default:
            return state;
    }
};