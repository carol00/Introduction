import styles from './family.module.sass'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotoData } from '../../redux/familySlice'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
      </div>
    </div>
  )
}