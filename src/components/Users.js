import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

	render() {
		return (
			<div>
				<ul>
					Users! {this.props.users.length}
				</ul>
				{this.props.users.map(u => <li>{u.username} from {u.hometown}</li>)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { users: state.users }
}

export default connect(mapStateToProps)(Users)
