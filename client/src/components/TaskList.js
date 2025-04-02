import { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    // fetch data from API
    const response = await fetch("http://localhost:3000/tasks/");
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    try {
      // delete task from API
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task, index) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={index}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => console.log("edit")}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)}
                style={{
                  marginLeft: ".5rem",
                }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TaskList;
