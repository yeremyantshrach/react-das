import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class User extends Component {
    state = {
        user: {

        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(user => {
                this.setState({ user })
            })
    }

    render() {
        return (
            <Row>
                <Col md="6">
                    {this.state.user.name}
                </Col>
                <Col md="6">
                    {this.state.user.username}
                </Col>
            </Row>
        )
    }
}

export default User;