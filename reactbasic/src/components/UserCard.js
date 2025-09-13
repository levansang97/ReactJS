import React, { Component } from "react";
import UserInfo from "./UserInfo";

class UserCard extends Component {
    render() {
        const { user } = this.props; // lấy user từ props

        return (
            <div className="border p-4 rounded-lg shadow-md bg-white">
                <h3 className="text-lg font-bold mb-2">Thông tin người dùng</h3>
                {/* Nested component */}
                <UserInfo username={user.username} email={user.email} />
            </div>
        );
    }
}

export default UserCard;
