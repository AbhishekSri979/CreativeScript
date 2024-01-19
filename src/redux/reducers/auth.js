import { ApIConstant } from "../../constants";

const initialState = {
    activePage: 'login'
};

function authReducer(state = initialState, action) {
    const { data, key } = action;
    switch (action.type) {
        case ApIConstant.UPDATE_INFO:
            state[key] = data;
            return { ...state };
        default:
            return { ...state };
    }
}
export default authReducer;
