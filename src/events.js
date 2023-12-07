import "./App.css";
import {
  Grid,
  Box,
  Typography,
  // styled,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import add from "./images/add.png";
import * as React from "react";
import EventModal from "./eventModal";
import { mockEvents } from "./mockEvents";

function Events() {
  const [visibleCardId, setVisibleCardId] = React.useState("");

  return (
    <Box padding={4}>
      <Box padding={2}>
        <Typography variant="h5">
          <b>Events this week! 🕺</b>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mockEvents.map((mockEvent) => (
          <>
            <Grid item xs={3}>
              <Card sx={{ height: 300 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={mockEvent.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {mockEvent.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mockEvent.location}
                  </Typography>
                </CardContent>
                <Box paddingLeft="135px">
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => setVisibleCardId(mockEvent.id)}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            <EventModal
              description={mockEvent.description}
              open={visibleCardId === mockEvent.id}
              setVisibleCardId={setVisibleCardId}
              name={mockEvent.name}
              date={mockEvent.date}
              image={mockEvent.image}
            />
          </>
        ))}
        <Grid item xs={3}>
          <Card sx={{ height: 300 }}>
            <CardMedia sx={{ height: 140 }} image={add} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <br></br>Create your new event
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"              "}
              </Typography>
            </CardContent>
            <Box paddingLeft="135px">
              <CardActions>
                <Button
                  size="small"
                  onClick={() => console.log("mockEvent.id")}
                >
                  {"           "}
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Events;
