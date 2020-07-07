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



// import {createStore} from 'redux';
// import reducer from './reducer';
// import {dec, del, inc, rnd} from './actions';

// const store = createStore(reducer);

// document.getElementById('dec').addEventListener('click', () => {
// store.dispatch(inc())
// })

// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch(dec())
//     })

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10)
//         store.dispatch(rnd(value))
//         })

// document.getElementById('del').addEventListener('click', () => {
//         store.dispatch(del())
//         })

// const update = () => {
//     document.getElementById('counter').textContent = store.getState();

// }

// store.subscribe(update);


// import {createStore} from 'redux';                                              //коротший варіант
// import reducer from './reducer';
// import {dec, del, inc, rnd} from './actions';

// const store = createStore(reducer);
// const {dispatch} = store;

// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (value) => dispatch(rnd(value));
// const delDispatch = () => dispatch(del());


// document.getElementById('dec').addEventListener('click', incDispatch)

// document.getElementById('inc').addEventListener('click', decDispatch)

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10)
//         rndDispatch(value)
//         })

// document.getElementById('del').addEventListener('click', delDispatch)

// const update = () => {
//     document.getElementById('counter').textContent = store.getState();

// }

// store.subscribe(update);




import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import {createStore, bindActionCreators} from 'redux';                                           
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

// actions = {
//     inc: inc,
//     dec: dec,
//     del: del,
//     rnd: rnd
// }

// const bindActionCreators = (creator, dispatch) => (...args) => {                 //замість попередніх фукцій, імпорт з redux
//     dispatch(creator(...args));
// }


const {dec, inc, rnd, del} = bindActionCreators(actions, dispatch);

// const decDispatch = bindActionCreators(dec, dispatch);
// const delDispatch = bindActionCreators(del, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);


// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10)
//         rnd(value)
//         })

// document.getElementById('del').addEventListener('click', del);

const update = () => {
    //document.getElementById('counter').textContent = store.getState();

    ReactDOM.render(<Counter
    counter={store.getState()}
    inc = {inc}
    dec = {dec}
    del = {del}
    rnd = {() => {
        const value = Math.floor(Math.random() *10);
        rnd(value)
    }}/>, document.getElementById('root'))

}
update();

store.subscribe(update);
