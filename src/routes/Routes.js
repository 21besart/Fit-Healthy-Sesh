import { useRoutes } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout";
import { Home, ExerciseDetail, Error, MealPlanning } from "../pages";

export const exerciseRoutes = [
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/exercise/:id", element: <ExerciseDetail /> },
      { path: "/meal-planning", element: <MealPlanning /> },
    ],
  },
  { path: "*", element: <Error /> },
];

export const Routes = () => {
  const routes = useRoutes(exerciseRoutes);

  return routes;
};
