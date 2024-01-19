import { ApIConstant } from '../../constants'
function updateInfoAction(data, key) {
    const action = {
        type: ApIConstant.UPDATE_INFO,
        data,
        key,
    };
    return action;
}

module.exports = {
    updateInfoAction
};
