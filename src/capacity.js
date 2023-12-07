import "./App.css";
import {
  Grid,
  Box,
  Typography,
  // styled,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import * as React from "react";

const cap = [
  { id: 0, name: "Mon", count: 0 },
  { id: 1, name: "Tue", count: 0 },
  { id: 2, name: "Wed", count: 0 },
  { id: 3, name: "Thu", count: 0 },
  { id: 4, name: "Fri", count: 0 },
];
function OfficeCapacity() {
  const [count, setCount] = React.useState([2, 4, 5, 7, 3]);

  return (
    <Box padding={2}>
      <Box padding={2}>
        <Typography variant="h5">
          <b>Office Capacity 👨🏻‍💻</b>
        </Typography>
      </Box>
      <Grid
        container
        wrap="nowrap"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        spacing={1}
        justify="flex-start"
      >
        {cap.map((c) => (
          <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {c.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {count[Number(c.id)]}
                  </Typography>
                </CardContent>
                <Box paddingLeft="68px">
                  <CardActions>
                    <Button
                      size="medium"
                      onClick={() => {
                        var newCount = count;
                        newCount[Number(c.id)] = newCount[Number(c.id)] + 1;
                        setCount(newCount);
                        console.log(count);
                      }}
                    >
                      ➕
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
}

export default OfficeCapacity;
