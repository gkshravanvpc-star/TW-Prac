
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function DialogPractice() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleDelete = () => {
    setOpen(false);
    setMessage("Demo: deletion confirmed.");
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 450, mx: "auto", mt: 4 }}>
      <Typography variant="h5">
        Student Management
      </Typography>

      <Typography>Student: Ravi</Typography>

      <Button
        variant="contained"
        color="error"
        onClick={() => setOpen(true)}
      >
        Delete Student
      </Button>

      {message && (
        <Typography color="success.main">
          {message}
        </Typography>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete Ravi's profile?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button onClick={handleDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

export default DialogPractice;
