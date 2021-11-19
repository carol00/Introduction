import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import AvatarImg from '../../component/avatarImg';

const company = [
  { name: '宣揚', startTime: '20**', deadline: '2017/10', content: 'Pos', icon: <LaptopMacIcon /> },
  { name: '長青', startTime: '2017/11', deadline: '2021/05', content: 'Game', icon: <SportsEsportsIcon /> },
  { name: '弈樂', startTime: '2021/11/8', deadline: '', content: 'Game', icon: <SportsEsportsIcon /> }
]

export default function Experience(props) {
  return (
    <div>
      <AvatarImg />
      <h2>{props.title}</h2>
      <Timeline position="alternate">
        {company.map((value,index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {value.startTime} - {value.deadline}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              {value.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {value.name}
            </Typography>
            <Typography>{value.content}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
      </Timeline>
    </div>
  )
}