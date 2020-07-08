const reducer = (state = 5, action) => {                                                     //передаються дані тільки зі стейту або екшина
    switch(action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.value;
        case 'DEL':
            return 0;
        default: 
            return state
    }
    }

export default reducer;