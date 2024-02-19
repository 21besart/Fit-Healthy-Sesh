import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from "../components/ExerciseDetail/Detail";
import ExerciseVideos from "../components/ExerciseDetail/ExerciseVideos";
import SimilarExercises from "../components/ExerciseDetail/SimilarExercises";
import {
  exerciseOptions,
  EXERCISE_API_URL,
  fetchData,
  youtubeOptions,
  YOUTUBE_API_URL,
} from "../utils/fetchData";
import { withErrorBoundary } from "../components/shared/ErrorBoundary";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(
        `${EXERCISE_API_URL}/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${YOUTUBE_API_URL}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMusclesExercisesData = await fetchData(
        `${EXERCISE_API_URL}/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMusclesExercisesData);

      const equipmentExercisesData = await fetchData(
        `${EXERCISE_API_URL}/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default withErrorBoundary(ExerciseDetail);
