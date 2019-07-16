import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Input, Label, Button } from 'reactstrap';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnNavigate = this.handleOnNavigate.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnNavigate(e) {
        e.persist();
        this.props.history.push('/register')
    }

    handleOnChange(e) {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleOnSubmit(e) {
        e.preventDefault()
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Form onSubmit={this.handleOnSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    onChange={this.handleOnChange}
                                    value={email}
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="input your email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    onChange={this.handleOnChange}
                                    value={password}
                                    id="examplePassword"
                                    placeholder="input your password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">
                                    Login
                                </Button>
                                <Button
                                    color="primary"
                                    outline
                                    style={{ float: 'right' }}
                                    onClick={this.handleOnNavigate}
                                >
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;