import './DetailsDisplay.css';
import { Box } from '@mui/material';

const DetailsDisplay = () => {
  return (
    <div className="details-display">
            <Box className="detail-display" sx={{backgroundColor: '#F7F944'}}>
                <p>Tasks Completed</p>
                <p>8</p>
            </Box>
            <Box className="detail-display" sx={{backgroundColor: '#C467C8'}}>
                <p>Pending Tasks</p>
                <p>4</p>
            </Box>
            <Box className="detail-display" sx={{backgroundColor: '#DF2DAA'}}>
                <p>Total Tasks</p>
                <p>12</p>
            </Box>
            <Box className="detail-display" sx={{backgroundColor: '#7E4FEA'}}>
                <p>Productivity Score</p>
                <p>66.6%</p>
            </Box>
        </div>
  )
}

export default DetailsDisplay