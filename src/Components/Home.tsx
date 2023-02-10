import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ParticlesContainer from "./ParticlesContainer";
import pfp from "../assets/killua.jpeg";
import TextTransition, { presets } from "react-text-transition";
import {LinkedIn, GitHub} from '@mui/icons-material';
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const TEXTS = ["Developer", "Designer", "Gamer", "Student"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box id="home" sx={{ backgroundColor: "#321A43" }}>
      <ParticlesContainer />
      <Grid container direction="column" alignItems="center" padding={10}>
        <CardContent sx={{zIndex: 1}}>
          <Grid container spacing={1} direction="column" alignItems="center">
            <Grid item xs={12}>
              <Avatar src={pfp} sx={{ width: 150, height: 150 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography color="green" variant="h6">
                Ahmed Al Busaidi
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextTransition springConfig={presets.wobbly}>
                <Typography color='green'>
                I am a {TEXTS[index % TEXTS.length]}
                </Typography>
              </TextTransition>
            </Grid>
            <Grid item xs={12}>
              <Button startIcon={<LinkedIn />} />
              <Button startIcon={<GitHub />} />
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Box>
  );
};

export default Home;
