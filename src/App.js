import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./App.css";

function App() {
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
    // const inputData = {
    //   finalTask,
    //   course,
    //   subject,
    //   language,
    //   challenge,
    // };
    if (finalTask === "custom") inputData.finalTask = customTask;

    const prompt = `
    Genera cuatro situaciones de aprendizaje en formato JSON, cada una con su respectivo title, scope y challenge, basadas en los siguientes datos:
    - finalTask: ${finalTask}
    - language: ${language}
    - course: ${course}
    - materia: ${subject}
    - challenge: ${challenge}
    `;

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
    <Container className="mt-5">
      <h1>Tu plaza oposiciones</h1>
      <h3>Genera una situación de aprendizaje</h3>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="educationalStage">
              <Form.Label>Etapa educativa:</Form.Label>
              <Form.Control
                as="select"
                value={educationalStage}
                onChange={handleEducationalStageChange}
              >
                <option value="" disabled hidden>
                  --Elige etapa educativa--
                </option>
                <option value="Infantil">Infantil</option>
                <option value="Primaria">Primaria</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="course">
              <Form.Label>Curso educativo:</Form.Label>
              <Form.Control
                as="select"
                value={course}
                onChange={handleCourseChange}
              >
                <option value="" disabled hidden>
                  --Elige curso educativo--
                </option>
                <option value="1º Primaria">1º Primaria</option>
                <option value="2º Primaria">2º Primaria</option>
                <option value="3º Primaria">3º Primaria</option>
                <option value="4º Primaria">4º Primaria</option>
                <option value="5º Primaria">5º Primaria</option>
                <option value="6º Primaria">6º Primaria</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="subject">
              <Form.Label>Materia:</Form.Label>
              <Form.Control
                as="select"
                value={subject}
                onChange={handleSubjectChange}
                disabled={!course}
              >
                <option value="" disabled hidden>
                  --Elige materia--
                </option>
                <option value="Conocimiento del medio Natural, Social y Cultural">
                  Conocimiento del medio Natural, Social y Cultural
                </option>
                <option value="Educación Física">Educación Física</option>
                <option value="Lengua Castellana y Literatura">
                  Lengua Castellana y Literatura
                </option>
                <option value="Lengua Extranjera">Lengua Extranjera</option>
                <option value="Matemáticas">Matemáticas</option>
                <option value="Música y Danza">Música y Danza</option>
                <option value="Plástica y Visual">Plástica y Visual</option>
                <option value="Valenciano: Lengua y Literatura">
                  Valenciano: Lengua y Literatura
                </option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <h4> Introduce el reto</h4>
        <Form.Group controlId="finalTask">
          <Form.Label>Tarea o producto final:</Form.Label>
          <Form.Control
            as="select"
            value={finalTask}
            onChange={handleTaskChange}
          >
            <option value="" disabled hidden>
              --Escoge una opción--
            </option>
            <option value="Guión de teatro">Guión de teatro</option>
            <option value="Juego de rol">Juego de rol</option>
            <option value="Presentación interactiva">
              Presentación interactiva
            </option>
            <option value="Mural colectivo">Mural colectivo</option>
            <option value="Collage">Collage</option>
            <option value="Webinar">Webinar</option>
            <option value="Maqueta">Maqueta</option>
            <option value="Infografía">Infografía</option>
            <option value="custom">Otro (especificar)</option>
          </Form.Control>
          {finalTask === "custom" && (
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                placeholder="Especifica tu propia opción"
                value={customTask}
                onChange={handleCustomTaskChange}
              />
            </InputGroup>
          )}
        </Form.Group>
        <Form.Group controlId="challenge">
          <Form.Label>Describe el reto:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={challenge}
            onChange={handleChallengeChange}
            placeholder="Describe el reto aquí..."
          />
        </Form.Group>
        <Form.Group>
          <Button onClick={fetchSituaciones} variant="primary">
            Enviar
          </Button>
        </Form.Group>
        <Form.Group>
          {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
