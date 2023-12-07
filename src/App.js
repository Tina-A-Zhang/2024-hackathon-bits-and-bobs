import "./App.css";
import Events from "./events";
import Lunch from "./lunch";
import { Box, Typography } from "@mui/material";
import OfficeCapacity from "./capacity";
// import OfficeTriage from "./OfficeTriage";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <Box backgroundColor="#ffeb3b" padding={2} height="36px">
            <Typography variant="h5">
              <b>Office Dashboard</b>
            </Typography>
          </Box>
        </header>
        <OfficeCapacity />
        <Events />
        <Lunch />
        {/* <OfficeTriage /> */}
      </body>
    </div>
  );
}

export default App;
