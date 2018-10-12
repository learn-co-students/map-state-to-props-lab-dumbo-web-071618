import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        num users: {this.props.userCount}
        <ul>
          {this.props.users.map(x=> <li>{x.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
    }
}

export default connect(mapStateToProps)(Users)
