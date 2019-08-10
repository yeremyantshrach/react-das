import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as aboutActions from '../store/about/actions';

class Post extends Component {
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(post => {
                this.props.onSetPost(post)
            })
    }

    render() {
        return (
            <Row>
                <Col md="3">
                    {this.props.post.title}
                </Col>
                <Col md="3">
                    {this.props.post.body}
                </Col>
                <Col md="3">
                    <NavLink to={`/user/${this.props.post.userId}`}>
                        Load owner
                    </NavLink>
                </Col>
                <Col md="3">
                    <NavLink to={`/contact/${this.props.post.id}`}>
                        Load comments
                    </NavLink>
                </Col>
            </Row>
        )
    }
}

function stateToProps(state) {
    return {
        post: state.about.post
    }
}

function dispatchToProps(dispatch) {
    return {
        onSetPost: (post) => dispatch(aboutActions.setPost(post))
    }
}

export default connect(stateToProps, dispatchToProps)(Post);
