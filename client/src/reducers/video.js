import {FETCH_VIDEO} from '../constants/actionTypes'

export default (state={video:''},action) =>{
    switch(action.type){
        case FETCH_VIDEO:
            return {...state,video:action.payload.video}
        default:
            return state
    }
}