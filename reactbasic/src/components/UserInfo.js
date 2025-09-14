import React, { Component } from "react";

// const UserInfo = (props) => {
//     return (
//         <div>
//             <p><strong>Tên:</strong> {props.username}</p>
//             <p><strong>Email:</strong> {props.email}</p>
//         </div>
//     );
// }

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
