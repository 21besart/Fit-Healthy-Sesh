import { Box, Stack, Typography } from "@mui/material";
import { Loader } from "../shared/Loader";

export const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {" "}
          {name}{" "}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          columnGap: { lg: "100px", xs: "0" },
        }}
      >
        {!exerciseVideos.length ? (
          <Loader />
        ) : (
          exerciseVideos?.slice(0, 3).map((item, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              className="exercise-video"
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>

                <Typography variant="h6" color="#777">
                  {item.video.channelName}
                </Typography>
                <Typography variant="subtitle1" color="#777">
                  {item.video.viewCountText}
                </Typography>
              </Box>
            </a>
          ))
        )}
      </Stack>
    </Box>
  );
};
