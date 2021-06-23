import React from 'react';
import { Dialog, DialogContent} from '@material-ui/core';

export function Modal({ onClose, open, children }) {
  return (
    <Dialog 
      onClose={onClose} 
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
