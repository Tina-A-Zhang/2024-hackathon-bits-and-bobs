import "./App.css";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  styled,
  CardHeader,
  Collapse,
  Avatar,
  IconButton,
} from "@mui/material";

import * as React from "react";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { mockLunch } from "./mockLunch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Lunch() {
  const [expanded, setExpanded] = React.useState(false);
  const [votec, setVotec] = React.useState([0, 0, 0]);
  const [voted, setVoted] = React.useState([false, false, false]);
  const handleUpvote = (l) => {
    const newv = votec;
    const newVoted = voted;
    newv[Number(l.id)] = newv[Number(l.id)] + 1;
    newVoted[Number(l.id)] = true;
    setVoted(newVoted);
    console.log(votec);
    setVotec(newv);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box padding={4}>
      <Box padding={4}>
        <Typography variant="h5">
          <b>Friday Lunch! 🍕</b>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mockLunch.map((l) => (
          <>
            <Grid xs={4}>
              <Card sx={{ width: 320 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      J
                    </Avatar>
                  }
                  title={l.name}
                  subheader="8 Dec 2023"
                />
                <CardMedia sx={{ height: 140 }} image={l.image} />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {l.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleUpvote(l)}
                  >
                    <FavoriteIcon
                      style={{ color: voted[Number(l.id)] ? "red" : "grey" }}
                    />
                    <Box paddingLeft={1}>{votec[l.id]}</Box>
                  </IconButton>

                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{l.method}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
}

export default Lunch;
