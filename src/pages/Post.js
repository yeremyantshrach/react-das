import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Post extends Component {
    state = {
        post: {

        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(post => {
                this.setState({ post })
            })
    }

    render() {
        return (
            <Row>
                <Col md="4">
                    {this.state.post.title}
                </Col>
                <Col md="4">
                    {this.state.post.body}
                </Col>
                <Col md="4">
                    <NavLink to={`/user/${this.state.post.userId}`}>
                        Load owner
                    </NavLink>
                </Col>
            </Row>
        )
    }
}

export default Post;