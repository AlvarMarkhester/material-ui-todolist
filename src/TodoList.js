import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function TodoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const textInput = useRef(null);

  function handleSubmit() {
    setTaskList(taskList.concat(task));
    setTask("");
  }
  function handleDelete(i) {
    setTaskList(taskList.filter((e, index) => index !== i))
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
              ref={textInput}
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
                <Fab onClick={() => handleDelete(i)} size="small" color="error" aria-label="edit">
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
