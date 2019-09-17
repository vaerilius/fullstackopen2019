

const reduser = (state = 'null', action) => {
    console.log('state notification: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        default:
            return state;
    }
}

export const setNotification = (notification) => {
    return {
        type: 'SET_NOTIFICATION',
        notification
    }
}

export default reduser