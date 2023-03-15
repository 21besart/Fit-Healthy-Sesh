import { Box } from "@mui/material";

import { Routes } from "./routes/Routes";
import "./App.css";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Routes />
    </Box>
  );
}

export default App;
