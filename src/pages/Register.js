import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const required = (value) => value.length > 0;
const isEmail = (value) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
const isUnique = (arrUsers, email) => !!arrUsers.find(user => user.email === email);

class Register extends Component {
    state = {
        fullName: '',
        email: '',
        password: '',
    }

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const { fullName, email, password } = this.state;
        if (
            required(fullName)
            && (required(email) && isEmail(email))
            && required(password)
        ) {
            let users = localStorage.getItem('users');
            if (!users) {
                localStorage.setItem('users', JSON.stringify([]));
                users = localStorage.getItem('users');
            }
            users = JSON.parse(users);
            if (!isUnique(users, email)) {
                users.push({ fullName, email, password });
                localStorage.setItem('users', JSON.stringify(users));
            }
        } else {

        }
    }

    render() {
        const { fullName, email, password } = this.state;
        return (
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Form onSubmit={this.handleOnSubmit}>
                            <FormGroup>
                                <Label for="fullName">Full Name</Label>
                                <Input
                                    type="text"
                                    value={fullName}
                                    onChange={this.handleOnChange}
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Input your full name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={this.handleOnChange}
                                    name="email"
                                    id="email"
                                    placeholder="Input your email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={this.handleOnChange}
                                    name="password"
                                    id="password"
                                    placeholder="input your password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">
                                    Register
                                </Button>
                                <span
                                    style={{ float: 'right' }}
                                >
                                    Already have account <NavLink to="/login">Login</NavLink>
                                </span>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;