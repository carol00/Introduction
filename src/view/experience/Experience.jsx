import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Slider from '@mui/material/Slider'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import styles from './experience.module.sass'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { createTheme } from '@mui/material/styles'
import clsx from 'clsx'

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const companyData = [
  { name: '宣揚', time: '2016/01~2017/10', content: '購物網', icon: <LaptopMacIcon /> },
  { name: '長青', time: '2017/11~2021/05',  content: '官網、H5老虎機', icon: <SportsEsportsIcon /> },
  { name: '弈樂', time: '2021/11/08 ~', content: '官網、後台', icon: <SportsEsportsIcon /> }
]

const theme = createTheme({
  palette: {
    primary: {
      main: '#285869'
    },
  },
})

export default function Experience() {
  const [selected, setSelected] = useState(0)
  const totalItem = 2
  const selectedItem = useCallback(() => {
    if (selected >= totalItem) return
    setSelected(selected + 1)
  }, [selected])

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Box sx={{ width: 350 }}  onClick={() => selectedItem()} className={styles.box}>
          <div className={styles.content}>
            {companyData.map((value, index) => (
              <div key={index} className={styles.items}>
                <TimelineItem>
                  <TimelineOppositeContent className={clsx(styles.name, selected === index && styles.activeColor)}>
                    {value.name}
                    <div className={styles.text}><p>{value.content}</p></div>
                    </TimelineOppositeContent>
                  <TimelineDot className={clsx(styles.icon, selected === index && styles.activeScale)}>{value.icon}</TimelineDot>
                  <TimelineContent className={clsx(styles.time, selected === index && styles.activeColor)} >{value.time}</TimelineContent>
                </TimelineItem>
              </div>
            ))}
          </div>
          <div className={styles.sliderBar}>
            <Slider
              components={{
                ValueLabel: ValueLabelComponent,
              }}
              aria-label="Volume"
              theme={theme}
              value={selected}
              max={2.4}
            />
          </div>
        </Box>
      </div>
    </div>
  );
}
