import {FETCH_VIDEO,START_LOADING,FETCH_VIDEO_DETAIL,COMMENT_VIDEO} from '../constants/actionTypes'
import * as api from '../api/index'

export const getVideo = (id)=>async (dispatch)=>{
    try {
        const xhr = new XMLHttpRequest()
        xhr.open('post',`http://localhost:8000/video/${id}`,true)
        xhr.responseType='arraybuffer'
        xhr.send()
        setTimeout(()=>{
            let blob = new Blob([xhr.response],{type:'video/mp4'})
            const url = URL.createObjectURL(blob)
            dispatch({type:FETCH_VIDEO,payload:{videoUrl:url}})
        },1000)
    } catch (error) {
        console.log(error)
    }
} 

export const getVideoDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchVideoDetail(id);
    dispatch({ type: FETCH_VIDEO_DETAIL, payload: { video: data } });
  } catch (error) {
    console.log(error);
  }
}; 

export const commentVideo = (value, id) => async (dispatch) => {
    try {
      const { data } = await api.commentVideo(value, id);
      dispatch({ type: COMMENT_VIDEO, payload: {video:data} });
  
      return data.comments;
    } catch (error) {
      console.log(error);
    }
  };