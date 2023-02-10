import React from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useDispatch,useSelector } from 'react-redux'
import {getVideo,getVideoDetail} from '../../actions/video'
import useStyles from './styles'
import CommentSection from './VideoComment';
const Video = () => {
    const {id} = useParams()
    const { videoUrl,video } = useSelector((state) => state.video);
    const dispatch = useDispatch()
    const classes = useStyles()
    useEffect(()=>{
      dispatch(getVideoDetail(id))
      dispatch(getVideo(id))
    },[id])
  return (
    <paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.imageSection}>
          <ReactPlayer url={videoUrl} className={classes.reactPlayer} controls />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {video?.title}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">{video?.message}</Typography>
          <CommentSection video={video}/>
        </div>
      </div>
    </paper>
  );
}

export default Video
