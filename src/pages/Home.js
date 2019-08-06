import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

import * as homeActions from '../store/home/actions';

class Home extends Component {
    state = {
        users: []
    };

    constructor(props) {
        super(props);
        this.handleOnIncrement = this.handleOnIncrement.bind(this);
        this.handleOnDecrement = this.handleOnDecrement.bind(this);
        this.handleOnChangeWord = this.handleOnChangeWord.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => {
                this.props.onSetUsers(users);
            })
    }

    handleOnIncrement(e) {
        e.preventDefault();
        this.props.onIncrement()
        
    }
    handleOnDecrement(e) {
        e.preventDefault();
        this.props.onDecrement()
    }
    handleOnChangeWord(e) {
        e.preventDefault();
        this.props.onChangeWord('Hello')
    }

    render() {
        return (
            <>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <NavLink to={`/user/${user.id}`}>
                                            Load Cureent
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}

function stateToProps(state) {
    return {
        users: state.home.users
    }
}

function dispatchToProps(dispatch) {
    return {
        onSetUsers: (users) => dispatch(homeActions.setUsers(users)),
    }
}

export default connect(stateToProps, dispatchToProps)(Home);