import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          width: '100%',
          padding: '32px',
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='h3'>Success</Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PrimaryButton onClick={onClose} color='primary'>
          Reset Form
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;
