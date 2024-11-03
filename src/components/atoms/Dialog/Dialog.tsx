import React from 'react';
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material';

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>Success!</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;
