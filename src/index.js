// const initialState = 0;

// const reducer = (state, action) => {
// if(action.type === 'INC'){
//     return state + 1
// }
// return 0;
// }


// let state = reducer(initialState, {type: 'INC'});
// console.log(state)

// state = reducer(state, {type: 'INC'})
// console.log(state)


// const reducer = (state = 0, action) => {
// switch(action.type) {
//     case 'INC':
//         return state + 1
//     default: 
//         return state
// }
// }

// let state = reducer(undefined, {});

// state = reducer(state, {type: 'INC'});
// console.log(state)

// state = reducer(state, {type: 'INC'})
// console.log(state)


// import {createStore} from 'redux';

// const reducer = (state = 0, action) => {
// switch(action.type) {
//     case 'INC':
//         return state + 1
//     default: 
//         return state
// }
// }

// const store = createStore(reducer);
// console.log(store.getState());

// store.dispatch({type: 'INC'});
// console.log(store.getState())
// store.dispatch({type: 'INC'});
// console.log(store.getState())
// store.dispatch({type: 'INC'});



// import {createStore} from 'redux';

// const reducer = (state = 0, action) => {
// switch(action.type) {
//     case 'INC':
//         return state + 1;
//     case 'DEC':
//         return state - 1;
//     default: 
//         return state
// }
// }

// const store = createStore(reducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })

// store.dispatch({type: 'INC'});

// store.dispatch({type: 'INC'});

// store.dispatch({type: 'DEC'});



// import {createStore} from 'redux';

// const reducer = (state = 0, action) => {                                                     //передаються дані тільки зі стейту або екшина
// switch(action.type) {
//     case 'INC':
//         return state + 1;
//     case 'DEC':
//         return state - 1;
//     case 'RND':
//         return state + action.value;
//     default: 
//         return state
// }
// }


// const store = createStore(reducer);

// document.getElementById('dec').addEventListener('click', () => {
// store.dispatch({type:'DEC'})
// })

// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch({type:'INC'})
//     })

//     document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10)
//         store.dispatch({type:'RND', value})
//         })

// const update = () => {
//     document.getElementById('counter').textContent = store.getState();

// }

// store.subscribe(update);



import {createStore} from 'redux';

const reducer = (state = 0, action) => {                                                     //передаються дані тільки зі стейту або екшина
switch(action.type) {
    case 'INC':
        return state + 1;
    case 'DEC':
        return state - 1;
    case 'RND':
        return state + action.value;
    default: 
        return state
}
}

const inc = () => ({type: "INC"});                                             //екшн кріейтор функції
const dec = () => ({type: "DEC"});
const rnd = (value) => ({type: "RND", value})                                                                                               

const store = createStore(reducer);

document.getElementById('dec').addEventListener('click', () => {
store.dispatch(inc())
})

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(dec())
    })

    document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10)
        store.dispatch(rnd(value))
        })

const update = () => {
    document.getElementById('counter').textContent = store.getState();

}

store.subscribe(update);