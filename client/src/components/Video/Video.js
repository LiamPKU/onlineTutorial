import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {getVideo} from '../../actions/video'
const Video = () => {
    const {id} = useParams()
    const { video } = useSelector((state) => state.video);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getVideo(id))
    },[])
  return (
    <div>
      <video src={video} width="1080" controls></video>
      {/* <video src="http://localhost:8000/video/2" width="1080" controls></video> */}
      {/* <video width="1080" controls>
        <source src="http://localhost:8000/video/2"></source>
      </video> */}
      {/* <video width="1080" controls>
        <source src={video}></source>
      </video> */}
    </div>
  )
}

export default Video
