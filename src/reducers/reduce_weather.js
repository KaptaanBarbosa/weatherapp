import {FETCH_WEATHER} from '../actions/index'

export default function(state=[],action){
    console.log('action recieved...',state)
    switch(action.type){
        case FETCH_WEATHER:
         console.log("Type of action is FETCH_WEATHER",action.payload,state);
         return [action.payload.data, ...state];
    }
 return state;
}