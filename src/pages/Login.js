import React, { Component } from 'react';
import {
    Container,
    Col,
    Row,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    FormFeedback,
} from 'reactstrap';

import { required, isEmail } from '../helpers';

class Login extends Component {
    state = {
        email: {
            value: '',
            touched: false,
            isValid: false,
            message: 'Not Valid Email !'
        },
        password: {
            value: '',
            touched: false,
            isValid: false
        },
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
        const { name, value } = e.target;
        let isValid = true;
        if (name === 'password') {
            isValid = required(value);
        } else if (name === 'email') {
            isValid = (required(value) && isEmail(value))
        }
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value,
                    touched: true,
                    isValid,
                    message: 'Not Valid Email !'
                }
            }
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const { history } = this.props;
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(user => user.email === email.value && user.password === password.value);
        if(user) {
            localStorage.setItem('user', JSON.stringify(user));
            history.replace('/');
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    email: {
                        ...prevState.email,
                        isValid: false,
                        message: "Invalid Email or password"
                    },
                    password: {
                        value: '',
                        touched: false,
                        isValid: false
                    }
                }
            })
        }
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
                                    value={email.value}
                                    name="email"
                                    id="exampleEmail"
                                    invalid={email.touched && !email.isValid}
                                    placeholder="input your email"
                                />
                                <FormFeedback>
                                    {email.message}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    onChange={this.handleOnChange}
                                    value={password.value}
                                    id="examplePassword"
                                    invalid={password.touched && !password.isValid}
                                    placeholder="input your password"
                                />
                                <FormFeedback>
                                    Password is required !
                                </FormFeedback>
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