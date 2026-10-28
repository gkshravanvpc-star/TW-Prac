
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
  Outlet,
} from "react-router";

import {
  Button,
  Typography,
  Box,
  Container,
  Stack,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";

import PostPractice from "./PostPractice";
import DeletePractice from "./DeletePractice";
import PutPractice from "./PutPractice";
import EventPractice from "./EventPractice";
import TimerPractice from "./TimerPractice";
import IntervalPractice from "./IntervalPractice";
import DatePractice from "./DatePractice";
import MuiFormPractice from "./MuiFormPractice";
import DialogPractice from "./DialogPractice";
import MenuPractice from "./MenuPractice";
import TablePractice from "./TablePractice";

// Home page
function Home() {
  return <MuiFormPractice />;
}

// Axios practice page
function AxiosPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Axios Practice
      </Typography>

      <Stack spacing={4}>
        <PostPractice />
        <DeletePractice />
        <PutPractice />
      </Stack>
    </Container>
  );
}

// Event practice page
function EventsPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Event Propagation Practice
      </Typography>

      <EventPractice />
    </Container>
  );
}

// Timer practice page
function TimersPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Timer Practice
      </Typography>

      <Stack spacing={4}>
        <TimerPractice />
        <IntervalPractice />
      </Stack>
    </Container>
  );
}

// Date practice page
function DatesPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Date Object Practice
      </Typography>

      <DatePractice />
    </Container>
  );
}

// Read the student ID from the URL
function StudentPage() {
  const { id } = useParams();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">Student Details</Typography>
      <Typography sx={{ mt: 2 }}>Student ID: {id}</Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Go Home
      </Button>
    </Container>
  );
}

// Navigate programmatically
function StudentNavigation() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Navigation
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => navigate("/students/101")}
        >
          Student 101
        </Button>

        <Button
          variant="outlined"
          onClick={() => navigate("/students/102")}
        >
          Student 102
        </Button>
      </Stack>
    </Container>
  );
}

// Dashboard overview
function DashboardOverview() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Overview
      </Typography>

      <Grid container spacing={2}>
        {[
          { title: "Total Students", value: "120" },
          { title: "Active Courses", value: "8" },
          { title: "Pending Tasks", value: "15" },
        ].map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 4 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  {item.title}
                </Typography>

                <Typography variant="h4" sx={{ mt: 1 }}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Dashboard profile
function DashboardProfile() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Profile
      </Typography>

      <Typography>Welcome to your profile page.</Typography>
    </Paper>
  );
}

// Dashboard settings
function DashboardSettings() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>

      <Typography>Manage your dashboard settings here.</Typography>
    </Paper>
  );
}

// Shared dashboard layout
function DashboardLayout() {
  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: "none",
    color: isActive ? "#1976d2" : "inherit",
    fontWeight: isActive ? 700 : 400,
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
          <NavLink to="/dashboard" end style={navStyle}>
            Overview
          </NavLink>

          <NavLink to="/dashboard/profile" style={navStyle}>
            Profile
          </NavLink>

          <NavLink to="/dashboard/settings" style={navStyle}>
            Settings
          </NavLink>
        </Stack>
      </Paper>

      <Outlet />
    </Container>
  );
}

// Main application and routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/axios" element={<AxiosPage />} />

        <Route path="/events" element={<EventsPage />} />

        <Route path="/timers" element={<TimersPage />} />

        <Route path="/dates" element={<DatesPage />} />

        <Route path="/students/:id" element={<StudentPage />} />

        <Route
          path="/student-navigation"
          element={<StudentNavigation />}
        />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        <Route path="/menu" element={<MenuPractice />} />

        <Route path="/dialog" element={<DialogPractice />} />

        <Route path="/table" element={<TablePractice />} />

        <Route
          path="*"
          element={
            <Container sx={{ py: 4 }}>
              <Typography variant="h4" gutterBottom>
                404 - Page Not Found
              </Typography>

              <Button component={Link} to="/" variant="contained">
                Return Home
              </Button>
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
