import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import SideBar from '../components/SideBar';

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
                    <Switch>
                        <Content>
                            <Route exact component={Home} path="/" />
                            <Route component={About} path="/about" />
                            <Route component={Contact} path="/contact" />
                            <Redirect from="*" to="/" />
                        </Content>
                    </Switch>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Web;