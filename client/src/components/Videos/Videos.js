import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import useStyles from './styles';

const Videos = ({ setCurrentId }) => {
  // const { videos, isLoading } = useSelector((state) => state.videos);
    const videos = [{_id:'638db660d7352c9c0f599182',title:'第一节课'}]
    const isLoading = false
  const classes = useStyles();

  if (!videos.length && !isLoading) return 'No videos';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {videos?.map((video) => (
          <Grid key={video._id} item xs={12} sm={12} md={6} lg={3}>
            <Link to={`/video/${video._id}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {`${video.title}`}
            </Link>
            {/* <Post post={post} setCurrentId={setCurrentId} /> */}
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Videos;
