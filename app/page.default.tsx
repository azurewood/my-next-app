'use client'

import Image from 'next/image'
import styles from './page.module.css'

import type { NextPage } from "next";
import { Button, Col, Container, Row } from "react-bootstrap";
const Home: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Bootstrap NextJS Tutorial</h1>
          <p>Hello</p>
          <Button>My Button</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
