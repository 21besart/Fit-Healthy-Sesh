import { Box, Stack, Typography } from "@mui/material";
import MealCard from "./MealCard";

export const MealList = ({ mealData }) => {
  const { nutrients } = mealData;

  return (
    <Box marginTop={7} textAlign="center">
      <Typography variant="h6">Macros</Typography>
      <Box component="ul" display="flex" flexDirection="column" mb={7}>
        <Typography>Calories: {nutrients.calories.toFixed(0)}</Typography>
        <Typography>
          Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
        </Typography>
        <Typography>Fat: {nutrients.fat.toFixed(0)}</Typography>
        <Typography>Protein: {nutrients.protein.toFixed(0)}</Typography>
      </Box>

      <Stack
        direction={{ lg: "row", xs: "column" }}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {mealData.meals.map(meal => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </Stack>
    </Box>
  );
};
