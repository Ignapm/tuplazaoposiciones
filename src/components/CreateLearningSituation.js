import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  MenuItem,
  Select,
  Typography,
  Box,
  Grid,
} from "@mui/material";

function CreateLearningSituation({ onBackToHome }) {
  const [educationalStage, setEducationalStage] = useState("");
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const [finalTask, setTask] = useState("");
  const [customTask, setCustomTask] = useState("");
  const [challenge, setChallenge] = useState("");
  const [response, setResponse] = useState(null);

  const handleEducationalStageChange = (event) => {
    setEducationalStage(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleChallengeChange = (event) => {
    setChallenge(event.target.value);
  };

  const fetchSituaciones = async () => {
    const language = "español";
    let inputData = {
      finalTask,
      course,
      subject,
      language,
      challenge,
    };
    if (finalTask === "custom") inputData.finalTask = customTask;

    const prompt = `
    Genera cuatro situaciones de aprendizaje en formato JSON, el idioma que sea en ${language},
     la tarea final que sea ${finalTask}, el curso que sea ${course}, la materia que sea ${subject}
     y el desafío que sea "${challenge}". Devuelve el contexto (200 palabras) y título de cada situación.`;
    try {
      const res = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk-None-lu0Fvf4QxWJeW0T0PpfCT3BlbkFJP9cYJXAlTGsxkVQyNzaH", // Añade aquí la API key
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo-instruct",
          prompt: prompt,
          max_tokens: 500,
          n: 1,
          stop: null,
          temperature: 0.7,
        }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Genera una situación de aprendizaje
      </Typography>
      <Box component="form">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Etapa educativa:
            </Typography>
            <Select
              fullWidth
              value={educationalStage}
              onChange={handleEducationalStageChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                --Elige etapa educativa--
              </MenuItem>
              <MenuItem value="Infantil">Infantil</MenuItem>
              <MenuItem value="Primaria">Primaria</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Curso educativo:
            </Typography>
            <Select
              fullWidth
              value={course}
              onChange={handleCourseChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                --Elige curso educativo--
              </MenuItem>
              <MenuItem value="1º Primaria">1º Primaria</MenuItem>
              <MenuItem value="2º Primaria">2º Primaria</MenuItem>
              <MenuItem value="3º Primaria">3º Primaria</MenuItem>
              <MenuItem value="4º Primaria">4º Primaria</MenuItem>
              <MenuItem value="5º Primaria">5º Primaria</MenuItem>
              <MenuItem value="6º Primaria">6º Primaria</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Materia:
            </Typography>
            <Select
              fullWidth
              value={subject}
              onChange={handleSubjectChange}
              displayEmpty
              disabled={!course}
            >
              <MenuItem value="" disabled>
                --Elige materia--
              </MenuItem>
              <MenuItem value="Conocimiento del medio Natural, Social y Cultural">
                Conocimiento del medio Natural, Social y Cultural
              </MenuItem>
              <MenuItem value="Educación Física">Educación Física</MenuItem>
              <MenuItem value="Lengua Castellana y Literatura">
                Lengua Castellana y Literatura
              </MenuItem>
              <MenuItem value="Lengua Extranjera">Lengua Extranjera</MenuItem>
              <MenuItem value="Matemáticas">Matemáticas</MenuItem>
              <MenuItem value="Música y Danza">Música y Danza</MenuItem>
              <MenuItem value="Plástica y Visual">Plástica y Visual</MenuItem>
              <MenuItem value="Valenciano: Lengua y Literatura">
                Valenciano: Lengua y Literatura
              </MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom mt={3}>
          Introduce el reto
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Tarea o producto final:
            </Typography>
            <Select
              fullWidth
              value={finalTask}
              onChange={handleTaskChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                --Escoge una opción--
              </MenuItem>
              <MenuItem value="Guión de teatro">Guión de teatro</MenuItem>
              <MenuItem value="Juego de rol">Juego de rol</MenuItem>
              <MenuItem value="Presentación interactiva">
                Presentación interactiva
              </MenuItem>
              <MenuItem value="Mural colectivo">Mural colectivo</MenuItem>
              <MenuItem value="Collage">Collage</MenuItem>
              <MenuItem value="Webinar">Webinar</MenuItem>
              <MenuItem value="Maqueta">Maqueta</MenuItem>
              <MenuItem value="Infografía">Infografía</MenuItem>
              <MenuItem value="custom">Otro (especificar)</MenuItem>
            </Select>
            {finalTask === "custom" && (
              <TextField
                fullWidth
                type="text"
                placeholder="Especifica tu propia opción"
                value={customTask}
                onChange={handleCustomTaskChange}
                sx={{ mt: 3 }}
              />
            )}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Describe el reto:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={challenge}
              onChange={handleChallengeChange}
              placeholder="Describe el reto aquí..."
            />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined" color="primary" onClick={onBackToHome}>
                Volver
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={fetchSituaciones}
              >
                Siguiente
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CreateLearningSituation;
