import { ApIConstant } from "../../Themes";
const initialState = {

};

function authReducer(state = initialState, action) {
    const { data, key } = action;
    switch (action.type) {
        // case ApIConstant.UPDATE_LIST_ATTENDANCE_DATA:
        //   state[key] = data;
        //   return { ...state };
        // case ApIConstant.UPDATE_SCHEDULE_LIST_DATA:
        //   state[key] = data;
        //   return { ...state };
        default:
            return { ...state };
    }
}
export default authReducer;
