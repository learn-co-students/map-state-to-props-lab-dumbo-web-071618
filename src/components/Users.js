import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

    render() {
        return (
            <div>
                <ul>
                    Users!
                    {renderUsers(this.props.users)}
                    <p>{this.props.users.length}</p>
                </ul>
            </div>
        )
    }
}

//add mapStateToProps here
const mapStateToProps = state => {
    return { users: state.users, userCount: state.users.length}
}

const renderUsers = users =>    {
    return users.map(user => {
        return <li>Username: {user.username} hometown: {user.hometown}</li>
    })
}

export default connect(mapStateToProps)(Users)
