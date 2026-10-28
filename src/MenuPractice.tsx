
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function MenuPractice() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedAction, setSelectedAction] = useState("");

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (action: string) => {
    setSelectedAction(action);
    handleClose();
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5">
        Student Actions
      </Typography>

      <Typography>
        Student: Anu
      </Typography>

      <Button
        variant="contained"
        onClick={handleClick}
      >
        More Options
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelect("View Profile")}>
          View Profile
        </MenuItem>

        <MenuItem onClick={() => handleSelect("Edit Student")}>
          Edit Student
        </MenuItem>

        <MenuItem onClick={() => handleSelect("Delete Student")}>
          Delete Student
        </MenuItem>
      </Menu>

      {selectedAction && (
        <Typography color="success.main">
          Selected: {selectedAction}
        </Typography>
      )}
    </Stack>
  );
}

export default MenuPractice;
