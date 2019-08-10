import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as aboutActions from '../store/about/actions';

class Contact extends Component {
    componentDidMount() {
        const id = this.props.post.id || this.props.match.params.postId;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(comments => {
                this.props.onSetComments(comments)
            })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Contact
            </div>
        )
    }
}

function stateToProps(state) {
    return {
        post: state.about.post,
        comments: state.about.comments
    }
}

function dispatchToProps(dispatch) {
    return {
        onSetComments: comments => dispatch(aboutActions.setComments(comments))
    }
}

export default connect(stateToProps, dispatchToProps)(Contact);
