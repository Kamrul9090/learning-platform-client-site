import React from 'react';
import Header from '../components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSideNav from '../components/RightSideNav/RightSideNav';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
const main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={4}>
                        <RightSideNav></RightSideNav>
                    </Col>
                    <Col lg={8}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default main;