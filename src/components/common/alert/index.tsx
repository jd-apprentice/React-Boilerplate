import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { BasicAlertsProps } from 'models/interfaces/types';

const BasicAlerts: React.FC<BasicAlertsProps> = ({ text }: BasicAlertsProps) => {
  return (
    <Stack sx={{ width: '100%', marginTop: "5px" }} spacing={2}>
      <Alert severity="error">{text}</Alert>
    </Stack>
  );
}

export default BasicAlerts;