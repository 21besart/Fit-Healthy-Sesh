import { Box, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const Error = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Typography color="#ff2625" fontWeight="600" fontSize="42px">
          An Error Occurred
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="20px"
        >
          Could not find the page you were looking for ):
        </Typography>
      </Box>
    </>
  );
};
