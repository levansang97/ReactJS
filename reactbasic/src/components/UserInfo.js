import React, { Component } from "react";

class UserInfo extends Component {
    render() {
        return (
            <div>
                <p><strong>Tên:</strong> {this.props.username}</p>
                <p><strong>Email:</strong> {this.props.email}</p>
            </div>
        );
    }
}

export default UserInfo;
