import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '10px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
    objectFit:'fill'
  },
  reactPlayer: {
    height: '68% !important',
    width: '65% !important',
    backgroundColor:'black',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: '40% !important',
    },
  },
  card: {
    display: 'flex',
    width: '100%',
    flexDirection:'column',
    // [theme.breakpoints.down('sm')]: {
    //   flexWrap: 'wrap',
    //   flexDirection: 'column',
    // },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    // marginLeft: '20px',
    // witdh:'100%',
    // [theme.breakpoints.down('sm')]: {
    //   marginLeft: 0,
    // },
    width:"100%",
    height:"90vh",
    position:"sticky",
    top:"46px",
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));