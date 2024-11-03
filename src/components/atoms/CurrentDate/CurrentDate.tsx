import React from 'react';
import Typography from '@mui/material/Typography';
import { useGetCurrentTimeQuery } from '@/store/timeApi';
import { formatDate } from '@/utils/date-utils';
import { Box } from '@mui/material';

interface CurrentDateTimeProps {
  timeZone: string;
}

const CurrentDateTime: React.FC<CurrentDateTimeProps> = ({ timeZone }) => {
  const {
    data: timeData,
    isError,
    isLoading,
  } = useGetCurrentTimeQuery({ timeZone });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
      {isLoading && (
        <Typography variant='body1'>Loading current time...</Typography>
      )}
      {isError && <Typography variant='body1'>Error fetching time</Typography>}
      {timeData && (
        <Typography variant='body1'>{formatDate(timeData.dateTime)}</Typography>
      )}
    </Box>
  );
};

export default CurrentDateTime;
