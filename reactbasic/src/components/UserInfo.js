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
        const { user } = this.props;
        return (
            <div>
                <p><strong>Tên:</strong> {user.FullName}</p>
                <p><strong>Email:</strong> {user.Email}</p>
                <p><strong>Phone:</strong> {user.PhoneNumber}</p>
            </div>
        );
    }
}

export default UserInfo;
