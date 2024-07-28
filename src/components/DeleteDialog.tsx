import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

interface DeleteDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (_id: string) => void;
  id: string;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  setOpen,
  onDelete,
  id,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete(id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Delete post confirmation</DialogTitle>
      <DialogContent>Are you sure you want to delete this post?</DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          className="border-black text-black hover:bg-slate-100"
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          className="bg-black text-white hover:bg-slate-700"
        >
          delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
