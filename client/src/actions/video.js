import {FETCH_VIDEO} from '../constants/actionTypes'
import * as api from '../api/index'

export const getVideo = (id)=>async (dispatch)=>{
    try {
        // const {data:{video}} = await api.fetchVideo(id)
        // console.log('video',video)
        const xhr = new XMLHttpRequest()
        xhr.open('post','http://localhost:8000/video/2',true)
        xhr.responseType='arraybuffer'
        let blob = new Blob([xhr.response],{type:'video/*'})
        const url = URL.createObjectURL(blob)
        console.log('url',url)
        xhr.send()
        dispatch({type:FETCH_VIDEO,payload:{video:url}})
        
    } catch (error) {
        console.log(error)
    }
} 