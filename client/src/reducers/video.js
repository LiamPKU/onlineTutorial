import {FETCH_VIDEO,FETCH_VIDEO_DETAIL,COMMENT_VIDEO} from '../constants/actionTypes'

export default (state={videoUrl:'',video:{},videos:[]},action) =>{
    switch(action.type){
        case FETCH_VIDEO:
            return {...state,videoUrl:action.payload.videoUrl}
        case FETCH_VIDEO_DETAIL:
            return {...state,video:action.payload.video}
        case COMMENT_VIDEO:
            return {...state,videos:[action.payload.video]}
        default:
            return state
    }
}