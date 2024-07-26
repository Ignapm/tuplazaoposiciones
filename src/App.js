import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./App.css";

function App() {
  const [educationalStage, setEducationalStage] = useState("");
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const [task, setTask] = useState("");
  const [challenge, setChallenge] = useState("");

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

  const handleChallengeChange = (event) => {
    setChallenge(event.target.value);
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
                <option value="option1">Infantil</option>
                <option value="option2">Primaria</option>
                <option value="option3">Secundaria</option>
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
                <option value="option1">1º Primaria</option>
                <option value="option2">2º Primaria</option>
                <option value="option3">3º Primaria</option>
                <option value="option4">4º Primaria</option>
                <option value="option5">5º Primaria</option>
                <option value="option6">6º Primaria</option>
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
                <option value="option1">
                  Conocimiento del medio Natural, Social y Cultural
                </option>
                <option value="option2">Educación Física</option>
                <option value="option3">Lengua Castellana y Literatura</option>
                <option value="option4">Lengua Extranjera</option>
                <option value="option5">Matemáticas</option>
                <option value="option6">Música y Danza</option>
                <option value="option7">Plástica y Visual</option>
                <option value="option8">Valenciano: Lengua y Literatura</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <h4> Introduce el reto</h4>
        <Form.Group controlId="task">
          <Form.Label>Tarea o producto final:</Form.Label>
          <Form.Control as="select" value={task} onChange={handleTaskChange}>
            <option value="" disabled hidden>
              --Escoge una opción--
            </option>
            <option value="option1">Guión de teatro</option>
            <option value="option2">Juego de rol</option>
            <option value="option3">Presentación interactiva</option>
            <option value="option4">Mural colectivo</option>
            <option value="option5">Collage</option>
            <option value="option6">Webinar</option>
            <option value="option7">Maqueta</option>
            <option value="option8">Infografía</option>
          </Form.Control>
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
      </Form>
    </Container>
  );
}

export default App;
