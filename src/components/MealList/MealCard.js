import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { fetchMealPlan, SPOONACULAR_API_URL } from "../../utils/fetchMealPlan";
import { Loader } from "../shared/Loader";

export default function MealCard({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchMealInfo = async () => {
      const mealInfo = await fetchMealPlan(
        `${SPOONACULAR_API_URL}/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&includeNutrition=false`
      );
      setImageUrl([mealInfo.image]);
    };

    fetchMealInfo();
  }, [meal.id]);

  return (
    <Box className="exercise-card">
      {!imageUrl ? <Loader /> : <img src={imageUrl} alt={meal.title} />}

      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": {
              background: "#ffbaba",
            },
          }}
        >
          Prep time: {meal.readyInMinutes} min
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": {
              background: "#fdd279",
            },
          }}
        >
          Servings: {meal.servings}
        </Button>
        <Button
          href={meal.sourceUrl}
          target="_blank"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#3b85ce",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": {
              background: "#6ca3da",
            },
          }}
        >
          Recipe Details
        </Button>
      </Stack>

      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {meal.title}
      </Typography>
    </Box>
  );
}
