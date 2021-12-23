// import Avatar from '../../component/avatar/Avatar'
import styles from './family.module.sass'
// import Icon from '@mdi/react'
import { useEffect } from 'react'
// import { mdiHomeAnalytics } from '@mdi/js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotoData } from '../../redux/familySlice'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// const AvatarArea = () => {
//   const avatarData = useSelector(state => state.family.avatar)
//   const imgSize = 75
//   return (
//     <div className={styles.avatarContainer}>
//       <div className={styles.avatarContent}>
//         {avatarData.map((value, index) => (
//           <Avatar key={index} img={value.src} width={imgSize} height={imgSize} />
//         ))}
//       </div>
//       <div className={styles.iconContent}>
//         <div className={styles.scaleUnbalanced}>
//           <Icon path={mdiHomeAnalytics } />
//         </div>
//       </div>
//     </div>
//   )
// }

const LifePhoto = () => {
  const photoData = useSelector(state => state.family.photo)

  return (
    <div>
      <Box sx={{ width: 800, height: 700, overflowY: 'auto' }}>
        <ImageList variant="masonry" cols={6} gap={8}>
          {photoData.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item.src}
                srcSet={item.src}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
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
      </div>
    </div>
  )
}