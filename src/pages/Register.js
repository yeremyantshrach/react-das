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
    FormFeedback
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { required, isEmail, isUnique } from '../helpers';

class Register extends Component {
    state = {
        fullName: {
            value: '',
            touched: false,
            isValid: false
        },
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
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {
        e.persist();
        const { name, value } = e.target;
        let isValid = true;
        if (name === 'fullName' || name === 'password') {
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
        const { fullName, email, password } = this.state;
        const { history } = this.props;
        if (
            required(fullName.value)
            && (required(email.value) && isEmail(email.value))
            && required(password.value)
        ) {
            let users = localStorage.getItem('users');
            if (!users) {
                localStorage.setItem('users', JSON.stringify([]));
                users = localStorage.getItem('users');
            }
            users = JSON.parse(users);
            if (!isUnique(users, email.value)) {
                users.push({ fullName: fullName.value, email: email.value, password: password.value });
                localStorage.setItem('users', JSON.stringify(users));
                history.push('/login')
            } else {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        email: {
                            ...prevState.email,
                            isValid: false,
                            message: 'This email already exists !'
                        }
                    }
                })
            }
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
                                    value={fullName.value}
                                    onChange={this.handleOnChange}
                                    name="fullName"
                                    id="fullName"
                                    invalid={fullName.touched && !fullName.isValid}
                                    placeholder="Input your full name"
                                />
                                <FormFeedback>
                                    Full Name is required !
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    value={email.value}
                                    onChange={this.handleOnChange}
                                    name="email"
                                    invalid={email.touched && !email.isValid}
                                    id="email"
                                    placeholder="Input your email"
                                />
                                <FormFeedback>
                                    {email.message}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    value={password.value}
                                    onChange={this.handleOnChange}
                                    name="password"
                                    id="password"
                                    invalid={password.touched && !password.isValid}
                                    placeholder="input your password"
                                />
                                <FormFeedback>
                                    Password is required !
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    color="primary"
                                    type="submit"
                                    disabled={
                                        !fullName.isValid
                                        || !email.isValid
                                        || !password.isValid
                                    }
                                >
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