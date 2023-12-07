import "./App.css";

import {
  Typography,
  Dialog,
  DialogTitle,
  Box,
  DialogContent,
  IconButton,
} from "@mui/material";

import * as React from "react";

import { styled } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function EventModal({
  name,
  description,
  open,
  setVisibleCardId,
  date,
  image,
}) {
  return (
    <BootstrapDialog
      onClose={() => setVisibleCardId("")}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Typography gutterBottom variant="h6">
          <b>{name}</b>
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => setVisibleCardId("")}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box height="300px" alignContent="center" width="100%">
          <Box alignItems="center" justifyContent="center">
            <img src={image} loading="lazy" alt="test" height="300px" />
          </Box>
        </Box>
        <Box paddingTop={2}>
          <Typography gutterBottom variant="body1">
            <b>❓ Description</b>: {description}
          </Typography>
          <Typography gutterBottom>
            <b>📅 Date</b>: {date}
          </Typography>
          <Typography gutterBottom>
            <b>📍 Location</b>: {description}
          </Typography>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  );
}

export default EventModal;
