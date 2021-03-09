export const DISMISS_ALERT = 'DISMISS_ALERT';
export const LOGOUT = 'LOGOUT';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const logout = () => {
    return {
        type: LOGOUT
    };
};
export const showModal = () => {
    return {
        type: SHOW_MODAL,
    };
};
export const hideModal = () => {
    return {
        type: HIDE_MODAL,
    };
};
export const dismiss = alert => {
    return {
        type: DISMISS_ALERT,
        alert
    };
};

