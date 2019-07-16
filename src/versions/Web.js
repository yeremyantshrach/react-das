import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import SideBar from '../components/SideBar';

import './Web.css';

function Web(props) {
    return (
        <Container fluid>
            <Header onToggleHandler={props.handleOnToggle} />
            <Row>
                {
                    props.isVisible && (
                        <Col md="3">
                            <SideBar />
                        </Col>
                    )
                }
                <Col md={props.isVisible ? 9 : 12}>
                    <Content>
                        {props.children}
                    </Content>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Web;