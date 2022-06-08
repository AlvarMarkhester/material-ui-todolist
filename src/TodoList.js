import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function TodoList() {
  const [addOpen, setAddOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);
  const [toggleError, setToggleError] = useState(false);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit() {
    if (task !== "") {
      setTaskList(taskList.concat(task));
      setAddOpen(true);
      setToggleError(false);
      setTask("");
      return;
    }
    setToggleError(true);
  }

  function handleAddClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setAddOpen(false);
  }
  function handleRemoveClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setRemoveOpen(false);
  }
  function handleDelete(i) {
    setTaskList(taskList.filter((e, index) => index !== i));
    setRemoveOpen(true);
  }

  return (
    <Container fixed>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        pt={20}
        px={25}
      >
        <Snackbar
          value="add"
          open={addOpen}
          autoHideDuration={6000}
          onClose={handleAddClose}
        >
          <Alert
            variant="filled"
            onClose={handleAddClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully added task!
          </Alert>
        </Snackbar>
        <Snackbar
          open={removeOpen}
          autoHideDuration={6000}
          onClose={handleRemoveClose}
        >
          <Alert
            variant="filled"
            onClose={handleRemoveClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Successfully removed task!
          </Alert>
        </Snackbar>
        <Typography
          variant="h2"
          component="div"
          letterSpacing={6}
          borderBottom={1}
          mb={6}
          color="text.secondary"
          fontWeight={400}
        >
          Todo list
        </Typography>
        <Box
          sx={{
            bgcolor: "background.paper",
            width: 1,
            display: "flex",
            pb: 5,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              error={toggleError}
              fullWidth
              autoFocus={true}
              helperText="Add your task above"
              id="demo-helper-text-aligned"
              variant="standard"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
          </Box>
          <Box>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="success"
              size="small"
            >
              Add
            </Button>
          </Box>
        </Box>
        <Stack spacing={2}>
          {taskList.map((t, i) => (
            <Card sx={{ width: 600, height: 60, bgcolor: "#4dabf5" }}>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography color="white" variant="h6" component="div">
                  {t}
                </Typography>
                <Fab
                  onClick={() => handleDelete(i)}
                  size="small"
                  color="error"
                  aria-label="edit"
                >
                  <DeleteForeverIcon />
                </Fab>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Grid>
    </Container>
  );
}

export default TodoList;
