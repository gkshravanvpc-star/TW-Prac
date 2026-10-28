
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";


type Student = {
  id: number;
  name: string;
  email: string;
  course: string;
  status: "Active" | "Inactive";
};

function TablePractice() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Anu", email: "anu@example.com", course: "React", status: "Active" },
    { id: 2, name: "Ravi", email: "ravi@example.com", course: "TypeScript", status: "Active" },
    { id: 3, name: "Priya", email: "priya@example.com", course: "CSS", status: "Inactive" },
    { id: 4, name: "Kiran", email: "kiran@example.com", course: "Material UI", status: "Active" },
  ]);

  const handleDelete = (id: number) => {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );
  };
  const filteredStudents = students
  .filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    const result = a.name.localeCompare(b.name);
    return sortOrder === "asc" ? result : -result;
  });
  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      <Typography
  variant="h5"
  sx={{
    fontWeight: "bold",
    color: "primary.main",
    mb: 1,
  }}
>
  Student Management
</Typography>
<TextField
  label="Search by student name"
  variant="outlined"
  size="small"
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
<Button
  variant="outlined"
  onClick={() =>
    setSortOrder((previousOrder) =>
      previousOrder === "asc" ? "desc" : "asc"
    )
  }
>
  Sort {sortOrder === "asc" ? "A–Z" : "Z–A"}
</Button>
      <TableContainer
  component={Paper}
  sx={{
    borderRadius: 3,
    boxShadow: 3,
    overflowX: "auto",
  }}
>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Course</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id} hover>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>
                  <Chip
                    label={student.status}
                    color={
                      student.status === "Active"
                        ? "success"
                        : "default"
                    }
                    size="small"
                  />
                </TableCell> 
                
<TableCell>
  <Button
    size="small"
    startIcon={<VisibilityIcon />}
    onClick={() => alert(`Viewing ${student.name}`)}
  >
    View
  </Button>

  <IconButton
    color="error"
    aria-label={`Delete ${student.name}`}
    onClick={() => handleDelete(student.id)}
  >
    <DeleteIcon />
  </IconButton>
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default TablePractice;
