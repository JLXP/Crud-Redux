import { types } from "../types";

export const showAlertAction = (alert) => {
    return (dispatch)=> {
        dispatch(createAlert(alert));
    }
}


const createAlert = (alert) => ({
    type: types.SHOW_ALERT,
    payload: alert
});

export const hiddenAlertAction = () => {
    return (dispatch) => {
        dispatch(hiddenAlert());
    }
}

const hiddenAlert = () => ({

})