import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import Navbar from './Navbar';

const AboutMe = () => {
  return (
    <div className="about-section bg-light py-5">
      <Container>
        <h2 className="text-center mb-5">Sobre Mim</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="https://gitlab.com/uploads/-/system/user/avatar/12508883/avatar.png?width=800"
              alt="Marcos Emanuel"
              className="img-fluid rounded mb-3"
            />
          </Col>
          <Col md={6}>
            <h3>Marcos Emanuel</h3>
            <p>
              Olá! Sou Marcos Emanuel, um desenvolvedor de software apaixonado com sólida experiência em Java e desenvolvimento Python.
            </p>
            <p>
              Tenho experiência trabalhando em diversos projetos, desde a construção de sistemas backend robustos até a criação de interfaces de usuário interativas. Estou sempre ansioso para aprender novas tecnologias e enfrentar desafios.
            </p>
            <p>
              Nas minhas horas vagas, gosto de explorar novas linguagens de programação, contribuir para projetos de código aberto e me manter atualizado com as últimas tendências da indústria.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
