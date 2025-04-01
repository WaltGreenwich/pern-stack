import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter from react-router-dom
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Container from "@mui/material/Container";
import Menu from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
