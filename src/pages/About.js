import React, { Component } from "react";
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class About extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({ posts })
        })
    }
    render() {
        console.log(this.props);
        return (
            <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>
                                        <NavLink to={`/post/${post.id}`}>
                                            Load Cureent
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
        )
    }
}

function stateToProps(state) {
    return {
        ...state
    }
}

export default connect(stateToProps)(About);