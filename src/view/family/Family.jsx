import styles from './family.module.sass'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotoData } from '../../redux/familySlice'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import boboVideo from '../../assets/bobo.mp4'
import pippyVideo from '../../assets/pippy.mp4'
// import Icon from '@mdi/react'
// import { mdiDog } from '@mdi/js'

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const LifePhoto = () => {
  const photoData = useSelector(state => state.family.photo)

  return (
    <div>
      <ImageList
        sx={{ width: 650, height: 600 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {photoData.map((item) => (
          <ImageListItem key={item.src} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.src, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

const ShowDialog = (props) => {
  const { dogName, videoName } = props
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.dialog}>
      <Button variant="outlined" onClick={handleClickOpen}>
        {dogName}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {/* <div className={styles.title}>
            <Icon path={mdiDog} />
          </div> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <video controls>
              <source src={videoName} type="video/mp4" />
            </video>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  )
}

const LifeVideo = () => {
  return (
    <div className={styles.videoContent}>
      <ShowDialog dogName={'Pippy'} videoName={pippyVideo} />
      <ShowDialog dogName={'BoBo'} videoName={boboVideo} />
    </div>
  )
}

export default function Family() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhotoData())
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {/* <AvatarArea /> */}
        <LifePhoto />
        <LifeVideo />
      </div>
    </div>
  )
}