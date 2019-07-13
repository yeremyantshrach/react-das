import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Input, Label } from 'reactstrap';

class Register extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="with a placeholder"
                                />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;