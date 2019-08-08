import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux'; 

import * as homeActions from '../store/home/actions';

class User extends Component {
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(user => {
                this.props.onSetUser(user);
            })
    }

    render() {
        return (
            <Row>
                <Col md="6">
                    {this.props.user.name}
                </Col>
                <Col md="6">
                    {this.props.user.username}
                </Col>
            </Row>
        )
    }
}

function stateToProps(state) {
    return {
        user: state.home.user,
    }
}

function dispatchToProps(dispatch) {
    return {
        onSetUser: user => dispatch(homeActions.setUser(user))
    }
}

export default connect(stateToProps, dispatchToProps)(User);