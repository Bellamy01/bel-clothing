const INITIAL_STATE = {
    currentUser: null
}

const userReducer = ( state = INITIAL_STATE, action ) => {
    const payload = {
        currentUser: JSON.stringify(action.payload)
    }
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                ...payload,
            }
        default: 
            return state;

    }
}

export default userReducer;