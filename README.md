# Fit Healthy Sesh

This project is done using [React](https://reactjs.org/) with [JavaScript](https://www.javascript.com/) and [Create React App](https://github.com/facebook/create-react-app) for compiling & bundling.

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white&style=for-the-badge)

## Features

- Show more than 1000 exercises
- Search exercises by name, body part, muscle target or equipment
- Show exercises with pagination
- Get exercise details
- When you go to the exercise's details
  - you get videos on how to do that exercise
  - you get similar exercises of that target muscle
  - you get similar exercises that you can do with the same equipment
- Get 3 daily meals all planned out based on the amount of calories that you input
- Get macronutrients info for your generated meals
- You're able to see servings, prep time and recipe details

## Live Version

[Live Version](https://fitsesh.netlify.app)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Recommended `node` : `>=16.13.0`.
- Recommended to use `pnpm` for better experience, but `npm` or `yarn` works for the commands below too.

### Setup

- Clone the repository.
- Install all dependencies using: - `npm install`.

### Directory Structure

| Name               | Description                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **public/**        | Static assets (favicon, html).                                                                                    |
| **src/assets**     | Contains assets like icons or images                                                                              |
| **src/components** | React components that are used for specific pages, the ones that are generic are placed inside the shared folder. |
| **src/pages**      | Main screen components like Home & MealPlanning are added here.                                                   |
| **src/utils**      | Contains helper functions                                                                                         |
|                    |

## Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!
