import React, { Component } from "react";
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as aboutActions from '../store/about/actions';

class About extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        this.props.onFetchPosts();
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
                            this.props.posts.map(post => (
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
        posts: state.about.posts,
    }
}

function dispatchToProps(dispatch) {
    return {
        onFetchPosts: () => dispatch(aboutActions.fetchPosts())
    }
}

export default connect(stateToProps, dispatchToProps)(About);