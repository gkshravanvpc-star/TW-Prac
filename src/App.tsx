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

import PostPractice from "./PostPractice";
import DeletePractice from "./DeletePractice";
import PutPractice from "./PutPractice";
import EventPractice from "./EventPractice";
import TimerPractice from "./TimerPractice";
import IntervalPractice from "./IntervalPractice";
import DatePractice from "./DatePractice";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MuiFormPractice from "./MuiFormPractice";

// Home page
function Home() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Welcome to React Practice
      </h2>
<Typography variant="h5" gutterBottom>
  My First Material UI Page
</Typography>

<Button
  variant="contained"
  onClick={() => alert("MUI is working!")}
>
  Test MUI Button
</Button>
      <p className="mt-2 text-slate-600">
        Choose a topic from the navigation menu to begin practicing.
      </p>
      <Link
        to="/students/2"
        className="mt-4 inline-block text-blue-600 underline"
      >
        View Ravi's Profile
      </Link>

      <Typography variant="h4" gutterBottom>
  Student Dashboard
</Typography>
<MuiFormPractice />
<Typography variant="body1" gutterBottom>
  Manage your students from one place.
</Typography>

<Divider />

<Button
  variant="contained"
  color="primary"
  startIcon={<AddIcon />}
  onClick={() => alert("Add Student clicked!")}
  sx={{ mt: 2 }}
>
  Add Student
</Button>
    </div>
  );
}

// Axios practice page
function AxiosPage() {
  return (
    <div className="space-y-6">
      <PostPractice />
      <DeletePractice />
      <PutPractice />
    </div>
  );
}

// Events practice page
function EventsPage() {
  return (
    <div className="space-y-6">
      <EventPractice />
    </div>
  );
}

// Timer practice page
function TimersPage() {
  return (
    <div className="space-y-6">
      <TimerPractice />
      <IntervalPractice />
    </div>
  );
}

// Date practice page
function DatesPage() {
  return (
    <div className="space-y-6">
      <DatePractice />
    </div>
  );
}

function StudentPage() {
  const { id } = useParams();

  const students: Record<string, string> = {
    "1": "Anu",
    "2": "Ravi",
    "3": "Priya",
  };

  const studentName = id ? students[id] : undefined;

  if (!studentName) {
    return <h2>Student not found!</h2>;
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Student Profile
      </h2>

      <p className="mt-3 text-slate-600">
        Student ID: {id}
      </p>

      <p className="mt-1 text-slate-600">
        Student Name: {studentName}
      </p>
    </section>
  );
}


function StudentNavigation() {
  const navigate = useNavigate();

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Student Navigation
      </h2>

      <p className="mt-2 text-slate-600">
        Click the button to open Ravi's profile.
      </p>

      <button
        onClick={() => navigate("/students/2")}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go to Ravi's Profile
      </button>
    </section>
  );
}




function DashboardLayout() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Dashboard
      </h2>
<Container maxWidth="md">
  <Box sx={{ py: 3 }}>
    <Typography variant="h4" gutterBottom>
      Student Dashboard
    </Typography>

    <Typography variant="body1" sx={{ mb: 3 }}>
      Manage your students from one place.
    </Typography>

    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">
            Total Students
          </Typography>
          <Typography variant="h4">
            25
          </Typography>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">
            Active Courses
          </Typography>
          <Typography variant="h4">
            4
          </Typography>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Anu
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Course: React
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="contained">
                View Profile
              </Button>

              <Button variant="outlined">
                Edit
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
</Container>
      <nav className="my-4 flex flex-wrap gap-3">
        <NavLink to="/dashboard" end
          className="text-blue-600 hover:underline">
          Overview
        </NavLink>

        <NavLink to="/dashboard/profile"
          className="text-blue-600 hover:underline">
          Profile
        </NavLink>

        <NavLink to="/dashboard/settings"
          className="text-blue-600 hover:underline">
          Settings
        </NavLink>
      </nav>

      {/* The selected child page appears here */}
      <Outlet />
    </div>
    
  );
}

function DashboardOverview() {
  return <p>Welcome to your dashboard overview!</p>;
}

function DashboardProfile() {
  return <p>This is your dashboard profile.</p>;
}

function DashboardSettings() {
  return <p>Manage your dashboard settings here.</p>;
}


function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Page heading */}
          <header className="mb-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              React + TypeScript
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              My React Practice Hub
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Practice Axios, events, timers, dates, and React Router.
            </p>
          </header>

          {/* Navigation menu */}
          <nav className="mb-8 flex flex-wrap gap-3 rounded-xl bg-white p-4 shadow-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/axios"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Axios
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/timers"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Timers
            </NavLink>

            <NavLink
              to="/dates"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Dates
            </NavLink>
            <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-600 hover:bg-slate-100"
    }`
  }
>
  Dashboard
</NavLink>
          </nav>

          {/* Page content changes according to the URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/axios" element={<AxiosPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/timers" element={<TimersPage />} />
            <Route path="/dates" element={<DatesPage />} />


            <Route path="/students/:id" element={<StudentPage />} />  
            <Route path="/student-navigation"element={<StudentNavigation />}/>
            <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
            </Route>
            {/* Page for unknown URLs */}
           <Route
  path="*"
  element={
    <section>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Return Home</Link>
    </section>
  }
/>
          </Routes>

          {/* Footer */}
          <footer className="mt-8 border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
            React learning practice
          </footer>

        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
