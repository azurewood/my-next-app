'use client'

import Link from "next/link";
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
      <h1 className="title">
                Read <Link href="/posts/first-post">this page!</Link>
            </h1>
            <h1 className="title">
                Read <Link href="/posts/x">Another page!</Link>
            </h1>
    </Container>
  );
};
export default Home;
