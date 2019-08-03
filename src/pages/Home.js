import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

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
                this.setState({ users })
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
        console.log(this.props);
        return (
            <>
                {/* <Table responsive>
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
                            this.state.users.map(user => (
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
                </Table> */}
                {this.props.counter}
                <br />
                {this.props.word}
                <button onClick={this.handleOnIncrement}>
                    Increment
                </button>
                <button onClick={this.handleOnDecrement}>
                    decrement
                </button>
                <button onClick={this.handleOnChangeWord}>
                    Change Word
                </button>
            </>
        )
    }
}

function stateToProps(state) {
    return {
        counter: state.counter,
        word: state.word
    }
}

function dispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT', payload: 1 }),
        onDecrement: () => dispatch({ type: 'DECREMENT', payload: -1 }),
        onChangeWord: (word) => dispatch({ type: 'CHANGE_WORD', payload: word })
    }
}

export default connect(stateToProps, dispatchToProps)(Home);