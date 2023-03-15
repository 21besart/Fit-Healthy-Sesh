import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { MealList } from "../components/MealList/MealList";
import { SPOONACULAR_API_URL, fetchMealPlan } from "../utils/fetchMealPlan";

export const MealPlanning = () => {
  const [calories, setCalories] = useState("");
  const [mealData, setMealData] = useState(null);

  const onSubmitHandler = async event => {
    event.preventDefault();

    const mealData = await fetchMealPlan(
      `${SPOONACULAR_API_URL}/mealplanner/generate?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&timeFrame=day&targetCalories=${calories}`
    );

    setCalories("");
    setMealData(mealData);
  };

  return (
    <Box marginTop={10}>
      <Box
        onSubmit={onSubmitHandler}
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          required
          type="number"
          label="Daily Calorie Intake"
          value={calories}
          inputProps={{ min: 0 }}
          onChange={e => {
            setCalories(e.target.value);
          }}
        />

        <Button
          type="submit"
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            padding: "20px",
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            mt: "20px",
          }}
        >
          Get Daily Meal Plan
        </Button>
      </Box>

      {mealData ? (
        <MealList mealData={mealData} />
      ) : (
        <Box
          sx={{
            mx: { lg: 0, xs: "90px" },
          }}
          marginTop={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="20px"
        >
          <Typography variant="h4">
            Eat Better, Feel Better - Plan Your 3 Daily Meals with us!
          </Typography>
          <Typography variant="subtitle1">
            With us, you can plan your daily 3 meals quickly and easily, making
            it simple to stay on track with your health and nutrition goals.
          </Typography>
        </Box>
      )}
    </Box>
  );
};
