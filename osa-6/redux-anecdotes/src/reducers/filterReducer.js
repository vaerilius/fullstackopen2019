
const reduser = (state = '', action) => {
    console.log('state filter: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return state;
    }
}

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
}


export default reduser