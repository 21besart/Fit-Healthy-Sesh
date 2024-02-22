import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        overflowX: "auto",
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
          }}
        >
          Home
        </NavLink>

        <a
          href="/#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </a>

        <NavLink
          to="/meal-planning"
          style={{
            textDecoration: "none",
            color: "#3a1212",
          }}
        >
          Meal Planning
        </NavLink>
      </Stack>
    </Stack>
  );
};
