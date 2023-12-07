import "./App.css";

import { Box } from "@mui/material";

const mockEvents = [
  { name: "event1" },
  { name: "event2" },
  { name: "event3" },
  { name: "event4" },
  { name: "event5" },
];

function OfficeTriage() {
  return (
    <Box padding={4} display="inline" flexDirection="column">
      <Box>box 1</Box>
      <Box>box 2</Box>
      <Box>box 3</Box>
    </Box>
  );
}

export default OfficeTriage;
